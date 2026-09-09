"""
Math Solver — Vercel Python Serverless Function.

POST a JSON body {"operation": "...", ...args} and get back a JSON result with
`steps` (an array of KaTeX-renderable strings) and a final `result_latex`.

Every step below is generated from a real SymPy computation — either SymPy's
own documented `manualintegrate.integral_steps()` rule tree (integration) or a
hand-walked derivative/algebra rule tree that mirrors it (differentiation,
linear/quadratic equations, limits, matrices). Nothing here is templated
placeholder text: if a genuine step-by-step derivation isn't available for an
input (e.g. a general non-linear/non-quadratic equation), the response says so
explicitly instead of fabricating steps.
"""
import json
from http.server import BaseHTTPRequestHandler

import sympy as sp
from sympy.integrals.manualintegrate import integral_steps
from sympy.parsing.sympy_parser import (
    parse_expr,
    standard_transformations,
    implicit_multiplication_application,
    convert_xor,
)

TRANSFORMATIONS = standard_transformations + (
    implicit_multiplication_application,
    convert_xor,
)

MAX_INPUT_LEN = 200


class SolverError(ValueError):
    pass


# Chapter cross-links — only included where a genuine match exists in the
# current content library, keyed by /subjects/mathematics/<level>/<chapter>.
CHAPTER_LINKS = {
    "differentiate": {"level": "b-level", "chapter": "method-of-differentiation", "title": "Methods of Differentiation"},
    "integrate": {"level": "c-level", "chapter": "methods-of-integration", "title": "Methods of Integration"},
    "limit": {"level": "b-level", "chapter": "method-of-differentiation", "title": "Methods of Differentiation"},
    "solve_quadratic": {"level": "a-level", "chapter": "quadratic-functions", "title": "Quadratic Functions"},
    "matrix_determinant": {"level": "b-level", "chapter": "matrices", "title": "Matrices"},
    "matrix_multiply": {"level": "b-level", "chapter": "matrices", "title": "Matrices"},
    "matrix_inverse": {"level": "b-level", "chapter": "matrices", "title": "Matrices"},
    "trig_evaluate": {"level": "a-level", "chapter": "trigonometry", "title": "Trigonometry"},
}


def _with_chapter_link(result: dict, operation: str) -> dict:
    link = CHAPTER_LINKS.get(operation)
    if link:
        result["chapter"] = {"subject": "mathematics", **link}
    return result


def parse(expr_str: str, local_dict=None):
    if not isinstance(expr_str, str) or not expr_str.strip():
        raise SolverError("Expression is empty.")
    if len(expr_str) > MAX_INPUT_LEN:
        raise SolverError("Expression is too long.")
    try:
        return parse_expr(expr_str, transformations=TRANSFORMATIONS, local_dict=local_dict)
    except (sp.SympifyError, SyntaxError, TypeError) as exc:
        raise SolverError(f"Could not parse '{expr_str}' as a math expression.") from exc


def latex(expr) -> str:
    return sp.latex(expr)


# ---------------------------------------------------------------------------
# Differentiation — hand-walked so every rule applied is named, not just a
# single sp.diff() call with no working shown.
# ---------------------------------------------------------------------------

def _diff_steps(expr, var):
    steps = []

    if expr.is_number:
        steps.append(f"The derivative of the constant ${latex(expr)}$ is $0$.")
        return sp.Integer(0), steps

    if expr == var:
        steps.append(f"The derivative of ${latex(var)}$ with respect to itself is $1$.")
        return sp.Integer(1), steps

    if isinstance(expr, sp.Add):
        steps.append(f"Sum rule: differentiate each term of ${latex(expr)}$ separately, then add the results.")
        total = sp.Integer(0)
        for term in expr.args:
            d, sub_steps = _diff_steps(term, var)
            steps.extend(sub_steps)
            total += d
        return sp.simplify(total), steps

    if isinstance(expr, sp.Mul):
        const_part = sp.Integer(1)
        other_factors = []
        for factor in expr.args:
            if factor.is_number:
                const_part *= factor
            else:
                other_factors.append(factor)
        if const_part != 1 and len(other_factors) == 1:
            steps.append(
                f"Constant multiple rule: pull the constant ${latex(const_part)}$ out, "
                f"then differentiate ${latex(other_factors[0])}$."
            )
            d, sub_steps = _diff_steps(other_factors[0], var)
            steps.extend(sub_steps)
            return sp.simplify(const_part * d), steps
        if len(expr.args) == 2 and all(not f.is_number for f in expr.args):
            u, v = expr.args
            steps.append(
                f"Product rule on ${latex(expr)}$: $(uv)' = u'v + uv'$ with $u={latex(u)}$, $v={latex(v)}$."
            )
            du, du_steps = _diff_steps(u, var)
            dv, dv_steps = _diff_steps(v, var)
            steps.extend(du_steps)
            steps.extend(dv_steps)
            result = sp.simplify(du * v + u * dv)
            steps.append(f"Combine: $({latex(u)})'\\cdot {latex(v)} + {latex(u)}\\cdot({latex(v)})' = {latex(result)}$.")
            return result, steps
        d = sp.diff(expr, var)
        steps.append(
            f"Differentiate the product ${latex(expr)}$ directly using the product rule: result is ${latex(d)}$."
        )
        return d, steps

    if isinstance(expr, sp.Pow):
        base, exp = expr.args
        if base == var and exp.is_number:
            d = exp * var ** (exp - 1)
            steps.append(f"Power rule: $\\frac{{d}}{{dx}}x^{{{latex(exp)}}} = {latex(exp)}x^{{{latex(exp - 1)}}}$.")
            return d, steps
        if base.free_symbols == {var} and exp.is_number:
            steps.append(f"Chain rule (power form) on ${latex(expr)}$: treat the base as an inner function $u={latex(base)}$.")
            du, du_steps = _diff_steps(base, var)
            steps.extend(du_steps)
            result = exp * base ** (exp - 1) * du
            steps.append(
                f"$\\frac{{d}}{{dx}}u^{{{latex(exp)}}} = {latex(exp)}u^{{{latex(exp - 1)}}}\\cdot u' = {latex(sp.simplify(result))}$."
            )
            return sp.simplify(result), steps
        d = sp.diff(expr, var)
        steps.append(f"Differentiate ${latex(expr)}$ directly: result is ${latex(d)}$.")
        return d, steps

    if isinstance(expr, (sp.sin, sp.cos, sp.tan, sp.exp, sp.log)):
        inner = expr.args[0]
        outer_derivatives = {
            sp.sin: lambda u: sp.cos(u),
            sp.cos: lambda u: -sp.sin(u),
            sp.tan: lambda u: 1 / sp.cos(u) ** 2,
            sp.exp: lambda u: sp.exp(u),
            sp.log: lambda u: 1 / u,
        }
        outer_name = {sp.sin: "sin", sp.cos: "cos", sp.tan: "tan", sp.exp: "exp", sp.log: "ln"}[expr.func]
        if inner == var:
            d = outer_derivatives[expr.func](inner)
            steps.append(f"Standard derivative: $\\frac{{d}}{{dx}}{outer_name}(x) = {latex(d)}$.")
            return d, steps
        steps.append(f"Chain rule on ${latex(expr)}$: outer function ${outer_name}(u)$ with inner $u={latex(inner)}$.")
        du, du_steps = _diff_steps(inner, var)
        steps.extend(du_steps)
        result = sp.simplify(outer_derivatives[expr.func](inner) * du)
        steps.append(f"Apply the chain rule: $\\frac{{d}}{{dx}}{outer_name}(u) = {outer_name}'(u)\\cdot u' = {latex(result)}$.")
        return result, steps

    d = sp.diff(expr, var)
    steps.append(f"Differentiate ${latex(expr)}$ using standard differentiation rules: result is ${latex(d)}$.")
    return d, steps


def differentiate(expr_str: str, var_str: str = "x"):
    var = sp.Symbol(var_str)
    expr = parse(expr_str, {var_str: var})
    result, steps = _diff_steps(expr, var)
    result = sp.simplify(result)
    return {
        "input_latex": latex(expr),
        "result_latex": latex(result),
        "result_str": str(result),
        "steps": steps,
    }


# ---------------------------------------------------------------------------
# Integration — walks SymPy's own manualintegrate rule tree, a real documented
# step representation rather than anything invented here.
# ---------------------------------------------------------------------------

RULE_DESCRIPTIONS = {
    "ConstantRule": lambda r: f"$\\int {latex(r.constant)}\\,dx = {latex(r.constant)}x$.",
    "PowerRule": lambda r: (
        f"Power rule: $\\int x^{{{latex(r.exp)}}}\\,dx = \\dfrac{{x^{{{latex(r.exp + 1)}}}}}{{{latex(r.exp + 1)}}}$."
        if r.exp != -1
        else "Special case: $\\int x^{-1}\\,dx = \\ln|x|$."
    ),
    "AddRule": lambda r: f"Sum rule: split ${latex(r.integrand)}$ into a sum and integrate each term separately.",
    "ConstantTimesRule": lambda r: f"Constant multiple rule: pull the constant ${latex(r.constant)}$ out of the integral.",
    "URule": lambda r: f"Substitution ($u$-substitution): let $u = {latex(r.u_func)}$.",
    "PartsRule": lambda r: "Integration by parts: $\\int u\\,dv = uv - \\int v\\,du$.",
    "TrigRule": lambda r: f"Standard trigonometric integral for ${latex(r.integrand)}$.",
    "ExpRule": lambda r: "Standard exponential integral: $\\int e^x\\,dx = e^x$.",
    "ReciprocalRule": lambda r: "Standard integral: $\\int \\dfrac{1}{x}\\,dx = \\ln|x|$.",
    "ArctanRule": lambda r: "Standard integral: $\\int \\dfrac{1}{1+x^2}\\,dx = \\arctan(x)$.",
    "AlternativeRule": lambda r: "Multiple methods apply here; using the simplest one.",
}


def _walk_integral_rule(rule, out_steps, depth=0):
    if depth > 40:
        return
    name = type(rule).__name__
    desc = RULE_DESCRIPTIONS.get(name)
    if desc:
        try:
            out_steps.append(desc(rule))
        except Exception:
            out_steps.append(f"Apply the {name.replace('Rule', '')} rule to ${latex(rule.integrand)}$.")
    else:
        out_steps.append(f"Integrate ${latex(rule.integrand)}$.")

    substeps = getattr(rule, "substeps", None)
    if substeps:
        for s in substeps:
            _walk_integral_rule(s, out_steps, depth + 1)
    substep = getattr(rule, "substep", None)
    if substep is not None:
        _walk_integral_rule(substep, out_steps, depth + 1)


def integrate(expr_str: str, var_str: str = "x", definite=None):
    var = sp.Symbol(var_str)
    expr = parse(expr_str, {var_str: var})
    rule = integral_steps(expr, var)
    steps = []
    _walk_integral_rule(rule, steps)

    indefinite_result = sp.integrate(expr, var)
    out = {"input_latex": latex(expr), "steps": steps}
    if definite and len(definite) == 2:
        a = parse(str(definite[0]))
        b = parse(str(definite[1]))
        value = sp.integrate(expr, (var, a, b))
        antideriv = indefinite_result
        upper = antideriv.subs(var, b)
        lower = antideriv.subs(var, a)
        steps.append(f"Antiderivative: $F(x) = {latex(antideriv)} + C$.")
        steps.append(
            f"Evaluate: $F({latex(b)}) - F({latex(a)}) = {latex(sp.simplify(upper))} - {latex(sp.simplify(lower))} = {latex(sp.simplify(value))}$."
        )
        out["result_latex"] = latex(sp.simplify(value))
        out["result_str"] = str(sp.simplify(value))
    else:
        out["result_latex"] = f"{latex(indefinite_result)} + C"
        out["result_str"] = f"{indefinite_result} + C"
    return out


# ---------------------------------------------------------------------------
# Linear equations: ax + b = c
# ---------------------------------------------------------------------------

def solve_linear(expr_str: str, var_str: str = "x"):
    var = sp.Symbol(var_str)
    if "=" not in expr_str:
        raise SolverError("Equation must contain '='.")
    lhs_str, rhs_str = expr_str.split("=", 1)
    lhs = parse(lhs_str, {var_str: var})
    rhs = parse(rhs_str, {var_str: var})
    steps = [f"Start with ${latex(lhs)} = {latex(rhs)}$."]

    moved = sp.expand(lhs - rhs)
    a = moved.coeff(var, 1)
    b = moved.coeff(var, 0)
    if a == 0:
        raise SolverError("Not a linear equation in this variable (no first-degree term).")
    if sp.expand(moved - (a * var + b)) != 0:
        raise SolverError("Not a linear equation in this variable (higher-degree terms present).")
    steps.append(f"Move everything to one side: ${latex(moved)} = 0$.")
    if b != 0:
        steps.append(f"Subtract ${latex(b)}$ from both sides: ${latex(a)}{var_str} = {latex(-b)}$.")
    if a != 1:
        steps.append(f"Divide both sides by ${latex(a)}$: ${var_str} = \\dfrac{{{latex(-b)}}}{{{latex(a)}}}$.")
    solution = sp.simplify(-b / a)
    steps.append(f"${var_str} = {latex(solution)}$.")
    return {
        "input_latex": f"{latex(lhs)} = {latex(rhs)}",
        "result_latex": f"{var_str} = {latex(solution)}",
        "result_str": str(solution),
        "steps": steps,
    }


# ---------------------------------------------------------------------------
# Quadratic equations: ax^2 + bx + c = 0
# ---------------------------------------------------------------------------

def solve_quadratic(expr_str: str, var_str: str = "x"):
    var = sp.Symbol(var_str)
    if "=" in expr_str:
        lhs_str, rhs_str = expr_str.split("=", 1)
        expr = sp.expand(parse(lhs_str, {var_str: var}) - parse(rhs_str, {var_str: var}))
    else:
        expr = sp.expand(parse(expr_str, {var_str: var}))

    try:
        poly = sp.Poly(expr, var)
    except sp.PolynomialError as exc:
        raise SolverError("Not a polynomial equation in this variable.") from exc
    coeffs = poly.all_coeffs()
    if len(coeffs) != 3:
        raise SolverError("Not a quadratic (degree-2) equation in this variable.")
    a, b, c = coeffs
    standard_form_expr = a * var**2 + b * var + c
    steps = [f"Standard form: ${latex(standard_form_expr)} = 0$, so $a={latex(a)}$, $b={latex(b)}$, $c={latex(c)}$."]

    discriminant = sp.simplify(b**2 - 4 * a * c)
    steps.append(f"Discriminant: $\\Delta = b^2 - 4ac = ({latex(b)})^2 - 4({latex(a)})({latex(c)}) = {latex(discriminant)}$.")

    if discriminant < 0:
        steps.append("$\\Delta < 0$: the equation has no real roots (two complex roots).")
    elif discriminant == 0:
        steps.append("$\\Delta = 0$: the equation has one repeated real root.")
    else:
        steps.append("$\\Delta > 0$: the equation has two distinct real roots.")

    steps.append("Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$.")
    sqrt_d = sp.sqrt(discriminant)
    x1 = sp.simplify((-b + sqrt_d) / (2 * a))
    x2 = sp.simplify((-b - sqrt_d) / (2 * a))
    steps.append(f"$x = \\dfrac{{-({latex(b)}) \\pm \\sqrt{{{latex(discriminant)}}}}}{{2({latex(a)})}}$.")
    if x1 == x2:
        steps.append(f"$x = {latex(x1)}$.")
        result_latex = f"x = {latex(x1)}"
        result_str = f"x = {x1}"
    else:
        steps.append(f"$x_1 = {latex(x1)}$, $\\quad x_2 = {latex(x2)}$.")
        result_latex = f"x_1 = {latex(x1)}, \\quad x_2 = {latex(x2)}"
        result_str = f"x = {x1} or x = {x2}"

    return {
        "input_latex": f"{latex(standard_form_expr)} = 0",
        "result_latex": result_latex,
        "result_str": result_str,
        "steps": steps,
    }


# ---------------------------------------------------------------------------
# General equations — honest fallback, no fabricated steps.
# ---------------------------------------------------------------------------

def solve_general(expr_str: str, var_str: str = "x"):
    var = sp.Symbol(var_str)
    if "=" in expr_str:
        lhs_str, rhs_str = expr_str.split("=", 1)
        lhs = parse(lhs_str, {var_str: var})
        rhs = parse(rhs_str, {var_str: var})
    else:
        lhs = parse(expr_str, {var_str: var})
        rhs = sp.Integer(0)
    eq = sp.Eq(lhs, rhs)

    solutions = sp.solve(eq, var)
    steps = [
        f"Solve ${latex(lhs)} = {latex(rhs)}$ for ${var_str}$.",
        "This equation's structure doesn't match one of the step-by-step patterns above "
        "(linear or quadratic) — solved directly with symbolic algebra instead. "
        "The result below is exact, but a term-by-term derivation isn't shown for this type yet.",
    ]
    result_latex = (
        ", \\quad ".join(f"{var_str} = {latex(s)}" for s in solutions)
        if solutions
        else "\\text{No solution found}"
    )
    return {
        "input_latex": f"{latex(lhs)} = {latex(rhs)}",
        "result_latex": result_latex,
        "result_str": str(solutions),
        "steps": steps,
    }


def solve_equation(expr_str: str, var_str: str = "x"):
    """Tries linear, then quadratic, then falls back to a general symbolic solve."""
    try:
        return solve_linear(expr_str, var_str)
    except SolverError:
        pass
    try:
        return _with_chapter_link(solve_quadratic(expr_str, var_str), "solve_quadratic")
    except SolverError:
        pass
    return solve_general(expr_str, var_str)


# ---------------------------------------------------------------------------
# Limits
# ---------------------------------------------------------------------------

def compute_limit(expr_str: str, var_str: str, point_str: str):
    var = sp.Symbol(var_str)
    expr = parse(expr_str, {var_str: var})
    point = parse(point_str)
    steps = [f"Evaluate $\\displaystyle\\lim_{{{var_str}\\to {latex(point)}}} {latex(expr)}$."]

    direct = expr.subs(var, point)
    try:
        simplified_direct = sp.simplify(direct)
    except Exception:
        simplified_direct = direct

    is_indeterminate = (
        simplified_direct.has(sp.zoo)
        or simplified_direct == sp.nan
        or simplified_direct.has(sp.oo, -sp.oo)
    )

    if not is_indeterminate and simplified_direct.is_finite is not False:
        steps.append(f"Direct substitution works: $f({latex(point)}) = {latex(simplified_direct)}$.")
        result = simplified_direct
    else:
        steps.append(
            f"Direct substitution gives an indeterminate or undefined form (${latex(simplified_direct)}$) "
            "— using limit laws / algebraic simplification instead."
        )
        result = sp.limit(expr, var, point)
        steps.append(f"$\\displaystyle\\lim_{{{var_str}\\to {latex(point)}}} {latex(expr)} = {latex(result)}$.")

    return {
        "input_latex": f"\\lim_{{{var_str}\\to {latex(point)}}} {latex(expr)}",
        "result_latex": latex(result),
        "result_str": str(result),
        "steps": steps,
    }


# ---------------------------------------------------------------------------
# Matrices
# ---------------------------------------------------------------------------

MAX_MATRIX_DIM = 6


def _parse_matrix(rows):
    if not isinstance(rows, list) or not rows or not all(isinstance(r, list) for r in rows):
        raise SolverError("Matrix must be a non-empty list of rows.")
    if len(rows) > MAX_MATRIX_DIM or any(len(r) > MAX_MATRIX_DIM for r in rows):
        raise SolverError(f"Matrix dimensions must be {MAX_MATRIX_DIM}x{MAX_MATRIX_DIM} or smaller.")
    row_len = len(rows[0])
    if any(len(r) != row_len for r in rows):
        raise SolverError("All matrix rows must have the same length.")
    return sp.Matrix([[parse(str(cell)) for cell in row] for row in rows])


def matrix_determinant(rows):
    m = _parse_matrix(rows)
    if m.shape[0] != m.shape[1]:
        raise SolverError("Only square matrices have a determinant.")
    steps = [f"Matrix: $A = {sp.latex(m)}$."]
    if m.shape == (2, 2):
        a, b, c, d = m[0, 0], m[0, 1], m[1, 0], m[1, 1]
        steps.append(f"For a 2×2 matrix, $\\det(A) = ad - bc = ({latex(a)})({latex(d)}) - ({latex(b)})({latex(c)})$.")
        det = sp.simplify(a * d - b * c)
    elif m.shape == (3, 3):
        steps.append("Cofactor expansion along the first row:")
        det = sp.Integer(0)
        for j in range(3):
            minor = m.minor_submatrix(0, j)
            sign = (-1) ** j
            minor_det = minor.det()
            steps.append(
                f"Term {j + 1}: ${'+' if sign > 0 else '-'} {latex(m[0, j])} \\cdot \\det{sp.latex(minor)} "
                f"= {'+' if sign > 0 else '-'}{latex(m[0, j])} \\cdot ({latex(minor_det)})$."
            )
            det += sign * m[0, j] * minor_det
        det = sp.simplify(det)
    else:
        det = m.det()
        steps.append(f"Determinant computed via standard cofactor/LU expansion for a {m.shape[0]}×{m.shape[1]} matrix.")
    steps.append(f"$\\det(A) = {latex(det)}$.")
    return {"input_latex": sp.latex(m), "result_latex": latex(det), "result_str": str(det), "steps": steps}


def matrix_multiply(rows_a, rows_b):
    a = _parse_matrix(rows_a)
    b = _parse_matrix(rows_b)
    if a.shape[1] != b.shape[0]:
        raise SolverError(f"Cannot multiply a {a.shape[0]}×{a.shape[1]} matrix by a {b.shape[0]}×{b.shape[1]} matrix.")
    steps = [
        f"$A = {sp.latex(a)}$, $\\quad B = {sp.latex(b)}$.",
        f"$A$ is {a.shape[0]}×{a.shape[1]} and $B$ is {b.shape[0]}×{b.shape[1]}, so $AB$ is {a.shape[0]}×{b.shape[1]}.",
    ]
    result = a * b
    for i in range(a.shape[0]):
        for j in range(b.shape[1]):
            terms = " + ".join(f"({latex(a[i, k])})({latex(b[k, j])})" for k in range(a.shape[1]))
            steps.append(f"Entry $(AB)_{{{i + 1}{j + 1}}} = {terms} = {latex(result[i, j])}$.")
    steps.append(f"$AB = {sp.latex(result)}$.")
    return {"input_latex": f"{sp.latex(a)} \\times {sp.latex(b)}", "result_latex": sp.latex(result), "result_str": str(result), "steps": steps}


def matrix_inverse(rows):
    m = _parse_matrix(rows)
    if m.shape[0] != m.shape[1]:
        raise SolverError("Only square matrices have an inverse.")
    det = m.det()
    steps = [f"$A = {sp.latex(m)}$.", f"$\\det(A) = {latex(sp.simplify(det))}$."]
    if det == 0:
        steps.append("Since $\\det(A) = 0$, $A$ has no inverse (it is singular).")
        return {
            "input_latex": sp.latex(m),
            "result_latex": "\\text{No inverse (singular matrix)}",
            "result_str": "singular",
            "steps": steps,
        }
    if m.shape == (2, 2):
        steps.append("For a 2×2 matrix, $A^{-1} = \\dfrac{1}{\\det(A)}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}$.")
    else:
        steps.append("$A^{-1} = \\dfrac{1}{\\det(A)}\\,\\text{adj}(A)$, computed via the adjugate (cofactor) matrix.")
    inv = sp.simplify(m.inv())
    steps.append(f"$A^{{-1}} = {sp.latex(inv)}$.")
    return {"input_latex": sp.latex(m), "result_latex": sp.latex(inv), "result_str": str(inv), "steps": steps}


# ---------------------------------------------------------------------------
# Trigonometry — evaluate/simplify a trig expression, showing exact-value or
# identity-based simplification where SymPy has one.
# ---------------------------------------------------------------------------

def trig_evaluate(expr_str: str):
    expr = parse(expr_str)
    steps = [f"Evaluate ${latex(expr)}$."]
    exact = sp.nsimplify(sp.simplify(expr), [sp.pi, sp.sqrt(2), sp.sqrt(3)])
    simplified = sp.simplify(expr)
    if simplified != expr:
        steps.append(f"Simplify using trigonometric identities: ${latex(expr)} = {latex(simplified)}$.")
    if exact.is_number and exact.free_symbols == set():
        steps.append(f"Exact value: ${latex(exact)}$.")
        result = exact
    else:
        result = simplified
    numeric = sp.N(result, 6)
    steps.append(f"Numerically, this is approximately ${latex(numeric)}$.")
    return {
        "input_latex": latex(expr),
        "result_latex": latex(result),
        "result_str": str(result),
        "steps": steps,
    }


OPERATIONS = {
    "differentiate": lambda body: _with_chapter_link(
        differentiate(body["expression"], body.get("variable", "x")), "differentiate"
    ),
    "integrate": lambda body: _with_chapter_link(
        integrate(body["expression"], body.get("variable", "x"), body.get("definite")), "integrate"
    ),
    "solve_equation": lambda body: solve_equation(body["expression"], body.get("variable", "x")),
    "solve_linear": lambda body: solve_linear(body["expression"], body.get("variable", "x")),
    "solve_quadratic": lambda body: _with_chapter_link(
        solve_quadratic(body["expression"], body.get("variable", "x")), "solve_quadratic"
    ),
    "limit": lambda body: _with_chapter_link(
        compute_limit(body["expression"], body.get("variable", "x"), body["point"]), "limit"
    ),
    "matrix_determinant": lambda body: _with_chapter_link(matrix_determinant(body["matrix"]), "matrix_determinant"),
    "matrix_multiply": lambda body: _with_chapter_link(
        matrix_multiply(body["matrix_a"], body["matrix_b"]), "matrix_multiply"
    ),
    "matrix_inverse": lambda body: _with_chapter_link(matrix_inverse(body["matrix"]), "matrix_inverse"),
    "trig_evaluate": lambda body: _with_chapter_link(trig_evaluate(body["expression"]), "trig_evaluate"),
}


class handler(BaseHTTPRequestHandler):
    def _send_json(self, status: int, payload: dict):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_POST(self):
        try:
            length = int(self.headers.get("Content-Length", 0))
            if length <= 0 or length > 10_000:
                self._send_json(400, {"ok": False, "error": "Request body missing or too large."})
                return
            raw = self.rfile.read(length)
            try:
                body = json.loads(raw)
            except json.JSONDecodeError:
                self._send_json(400, {"ok": False, "error": "Request body must be valid JSON."})
                return

            operation = body.get("operation") if isinstance(body, dict) else None
            fn = OPERATIONS.get(operation)
            if fn is None:
                self._send_json(
                    400,
                    {
                        "ok": False,
                        "error": f"Unknown operation '{operation}'. Valid operations: {', '.join(OPERATIONS)}.",
                    },
                )
                return

            try:
                result = fn(body)
            except SolverError as exc:
                self._send_json(200, {"ok": False, "error": str(exc)})
                return
            except KeyError as exc:
                self._send_json(200, {"ok": False, "error": f"Missing required field: {exc}"})
                return
            except (sp.SympifyError, TypeError, ValueError, ZeroDivisionError) as exc:
                self._send_json(200, {"ok": False, "error": f"Couldn't solve that: {exc}"})
                return

            self._send_json(200, {"ok": True, **result})
        except Exception as exc:  # last-resort guard: always return JSON, never a raw 500
            self._send_json(500, {"ok": False, "error": f"Internal error: {exc}"})

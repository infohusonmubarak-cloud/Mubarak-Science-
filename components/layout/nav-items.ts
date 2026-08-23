export interface NavItem {
  href: string;
  label: string;
  icon: string;
}

// Shared between Sidebar (desktop) and BottomNav (mobile) so the two never
// drift out of sync.
export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/subjects', label: 'Subjects', icon: '📚' },
  { href: '/revision', label: 'Revision', icon: '🔁' },
  { href: '/formulas', label: 'Formulas', icon: '∑' },
  { href: '/dashboard', label: 'Dashboard', icon: '📈' },
];

export const SECONDARY_NAV_ITEMS: NavItem[] = [
  { href: '/teacher-guide', label: 'Teacher Guide', icon: '🧑‍🏫' },
  { href: '/search', label: 'Search', icon: '🔎' },
];

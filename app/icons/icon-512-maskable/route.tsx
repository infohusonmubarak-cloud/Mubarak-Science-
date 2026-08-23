import { renderIconResponse } from '@/lib/icons/mark';

export const dynamic = 'force-static';

export function GET() {
  return renderIconResponse(512, true);
}

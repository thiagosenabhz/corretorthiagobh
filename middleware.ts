import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale } from './lib/i18n'

function getLocale(request: NextRequest) {
  const accept = request.headers.get('accept-language') || ''
  const langs = accept.split(',').map(s => s.trim().slice(0,2))
  for (const l of langs) {
    if (locales.includes(l as any)) return l
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname.startsWith('/_next') || pathname.includes('.')) return
  const pathLocale = pathname.split('/')[1]
  if (!locales.includes(pathLocale as any)) {
    const locale = getLocale(request)
    const url = new URL(`/${locale}${pathname}`, request.url)
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: ['/((?!api|_next|.*\..*).*)'],
}

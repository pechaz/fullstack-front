import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
	const tokenCookie = req.cookies.get('access_token');

	if (
		(!tokenCookie || !tokenCookie.value) &&
		req.nextUrl.pathname !== '/sign-in' &&
		req.nextUrl.pathname !== '/sort'
	) {
		return NextResponse.redirect(new URL('/sign-in', req.url));
	}
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};

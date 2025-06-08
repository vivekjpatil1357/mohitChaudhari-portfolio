import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Define caching rules
  const cacheControl = response.headers.get('Cache-Control') || '';
  
  // Apply specific cache rules based on the path
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // API routes - shorter cache time or no cache
    response.headers.set('Cache-Control', 'public, max-age=60, s-maxage=60');
  } else if (
    request.nextUrl.pathname.includes('.svg') ||
    request.nextUrl.pathname.includes('.jpg') ||
    request.nextUrl.pathname.includes('.png') ||
    request.nextUrl.pathname.includes('.json')
  ) {
    // Static assets - longer cache times
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (
    request.nextUrl.pathname === '/' ||
    request.nextUrl.pathname === '/index' 
  ) {
    // Homepage - moderate cache time
    response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=300, stale-while-revalidate=60');
  } else {
    // Default for other pages
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=60');
  }
  
  return response;
}

export const config = {
  matcher: [
    // Skip certain paths
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};

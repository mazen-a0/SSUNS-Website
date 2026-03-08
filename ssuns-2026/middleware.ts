import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const protectedPrefixes = ["/staff", "/staff-resources"];

function isProtectedPath(pathname: string) {
  return protectedPrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

export function middleware(request: NextRequest) {
  if (!isProtectedPath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const username = process.env.STAFF_BASIC_AUTH_USER;
  const password = process.env.STAFF_BASIC_AUTH_PASSWORD;

  if (!username || !password) {
    return NextResponse.rewrite(new URL("/404", request.url));
  }

  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith("Basic ")) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="SSUNS Staff"' },
    });
  }

  const encoded = authorization.split(" ")[1] ?? "";
  const decoded = atob(encoded);
  const [providedUser, providedPassword] = decoded.split(":");

  if (providedUser !== username || providedPassword !== password) {
    return new NextResponse("Invalid credentials", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="SSUNS Staff"' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/staff/:path*", "/staff-resources/:path*"],
};

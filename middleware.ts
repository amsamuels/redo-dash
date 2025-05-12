import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();

export const config = {
  matcher: [
    // Protect everything except for auth, public routes and the redirect
    "/((?!api/auth|go|$|favicon.ico|_next|.*\\..*).*)",
  ],
};
// pages/api/auth/[...auth0].ts
import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
  login: handleLogin({
    authorizationParams: {
      scope: 'openid profile email',
      audience: process.env.AUTH0_AUDIENCE,
    },
    returnTo: '/dashboard',
  }),
  signup: handleLogin({
    authorizationParams: {
      scope: 'openid profile email',
      audience: process.env.AUTH0_AUDIENCE,
      screen_hint: 'signup',
    },
    returnTo: '/dashboard?flow=signup',
  }),
});

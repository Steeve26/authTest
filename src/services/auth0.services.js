import auth0 from "auth0-js";

const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;
const userScope = import.meta.env.VITE_REACT_APP_AUTH0_USER_SCOPE;

export const auth = new auth0.WebAuth({
  domain: "dev-8jubc8723wwh03dy.us.auth0.com",
  clientID: "ixGqSzFIrDkuA5twSGcfrAQo4opIiyai",
  scope: "openid email profile"
});























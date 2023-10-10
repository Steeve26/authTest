import auth0 from "auth0-js";

const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;
const userScope = import.meta.env.VITE_REACT_APP_AUTH0_USER_SCOPE;

export const auth = new auth0.WebAuth({
  domain,
  clientID: clientId,
  scope: userScope
});

// export const manag = new auth0.Management({
// })























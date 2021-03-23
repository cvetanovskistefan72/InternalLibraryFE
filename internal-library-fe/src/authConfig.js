// Config object
export const msalConfig = {
    auth: {
      clientId: "ad48276a-b128-44f0-b962-1fabf1ab5169",
      redirectUri: "http://localhost:3001",
      postLogoutRedirectUri: "http://localhost:3001",
    },
  };
  
  // Scopes
  export const loginRequest = {
    scopes: ["User.Read"],
  };
 
  
  // Endpoints
  export const graphConfig = {
    graphMeEndpoint: `https://graph.microsoft.com/v1.0/me`
  };
  
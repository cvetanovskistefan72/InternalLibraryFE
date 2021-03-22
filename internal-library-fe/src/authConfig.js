// Config object
export const msalConfig = {
    auth: {
      clientId: "6db1c0dd-97d9-4a8d-8a3d-972432dd1e01",
      redirectUri: "http://localhost:3001",
      postLogoutRedirectUri: "http://localhost:3001",
    },
  };
  
  // Scopes
  export const loginRequest = {
    scopes: ["User.read"],
  };
 
  
  // Endpoints
  export const graphConfig = {
    graphMeEndpoint: `https://graph.microsoft.com/User.Read`
  };
  
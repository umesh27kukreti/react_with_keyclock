import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "http://localhost:8080/auth/",
  realm: "authentication_with_keyclock",
  clientId: "keyclock_demo",
});

export default keycloak;

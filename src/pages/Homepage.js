import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const Home = () => {
  const { keycloak } = useKeycloak();

  console.log(keycloak);
  return (
    <div>
      <h1 className="text-green-800 text-4xl">Welcome to the Homepage</h1>
    </div>
  );
};

export default Home;

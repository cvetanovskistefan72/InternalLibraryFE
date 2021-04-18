import React, { createContext, useState } from "react";
import { getAuthorsData } from "../api/crud-api";

export const RoleContext = createContext();

const RoleContextProvider = (props) => {
  const [role, setRole] = useState("");

  
  const values = {
    role,
    setRole,
  };
  return (
    <RoleContext.Provider value={values}>
      {props.children}
    </RoleContext.Provider>
  );
};

export default RoleContextProvider;
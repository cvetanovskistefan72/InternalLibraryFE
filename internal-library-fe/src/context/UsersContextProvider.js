
import React, { createContext, useState } from "react";
import { getUsersData } from "../api/crud-api";

export const UsersContext = createContext();

const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    await getUsersData()
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const values = {
    users,
    getUsers,
  };
  return (
    <UsersContext.Provider value={values}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;

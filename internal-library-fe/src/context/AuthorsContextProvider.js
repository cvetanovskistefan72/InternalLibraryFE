import React, { createContext, useState } from "react";
import { getAuthorsData } from "../api/crud-api";

export const AuthorsContext = createContext();

const AuthorsContextProvider = (props) => {
  const [authors, setAuthors] = useState([]);

  const getAuthors = async () => {
    await getAuthorsData()
      .then(({ data }) => {
        setAuthors(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const values = {
    authors,
    getAuthors,
  };
  return (
    <AuthorsContext.Provider value={values}>
      {props.children}
    </AuthorsContext.Provider>
  );
};

export default AuthorsContextProvider;

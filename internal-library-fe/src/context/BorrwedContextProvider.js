import React, { createContext, useContext, useState } from "react";
import {  getBorrowedData, postBorrowed, putReturn } from "../api/crud-api";
import { emptySearch, emptyType } from "../config/config";
import {DataContext} from './DataContextProvider'
export const BorrowedContext = createContext();

const BorrowedContextProvider = (props) => {
  const [borrowed,setBorrowed] = useState([]);
  const { getData } = useContext(DataContext)

  const getBorrowed = async (userId) => {
    await getBorrowedData(userId)
      .then(({ data }) => {
        setBorrowed(data.resourceList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBorrowed = async (res) => {
    const userId = JSON.parse(localStorage.getItem("userData"));
    const borrowed = {
      userId: userId.homeId,
      resourceList: [res],
      borrowedDate: getDate(),
    };

    await postBorrowed(borrowed);
    await getBorrowed(userId.homeId)
    await getData(emptySearch,emptyType);

  };

  const handleReturn = async (res) => {
    const userId = JSON.parse(localStorage.getItem("userData"));
    const returned = {
      userId: userId.homeId,
      resourceList: [res],
      borrowedDate: getDate(),
    };

    await putReturn(returned);
    await getBorrowed(userId.homeId)
    await getData(emptySearch,emptyType);
  };

  const getDate= ()=>{
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
  
    return year + "-" + month + "-" + day;
  }
  const values = {
    borrowed,
    getBorrowed,
    handleReturn,
    handleBorrowed
  };
  return (
    <BorrowedContext.Provider value={values}>
      {props.children}
    </BorrowedContext.Provider>
  );
};

export default BorrowedContextProvider;

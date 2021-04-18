import React, { useContext, useEffect, useState } from "react";
import { defaultResourceSize, HISTORY_PAGE_ID } from "../../config/config";
import { DataContext } from "../../context/DataContextProvider";
import { NavbarContext } from "../../context/NavbarContextProvider";
import { UsersContext } from "../../context/UsersContextProvider";
import Pagination from "../Reusable/Pagination";
import Results from "../Reusable/Results";
import HistoryTable from "./HistoryTable";

const HistoryPage = () => {

  const { setActiveNavLink } = useContext(NavbarContext);
  const { data, getHistory, setData } = useContext(DataContext);
  const { users, getUsers } = useContext(UsersContext);

  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setActiveNavLink(HISTORY_PAGE_ID);
    getUsers();
    getHistory();
   
    return () => setData([]);
  }, []);
 
  const paginatedData = data.slice(
    page * defaultResourceSize,
    page * defaultResourceSize + defaultResourceSize
  )
 

  return (
    <div className="container history-page">
      <div className="history-page-upper"></div>
      <div className="history-page-middle">
        <HistoryTable loading={loading} data={paginatedData} users={users} />
      </div>
      <div className="history-page-bottom">
        <Results
          results={data.length}
          pages={Math.ceil(data.length / defaultResourceSize)}
        />
        <Pagination dataLength={data.length} page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default HistoryPage;

import React, { useContext, useEffect, useState } from "react";
import {
  defaultResourceSize,
  emptySearch,
  RESOURCES_PAGE_ID,
} from "../../config/config";
import { AuthorsContext } from "../../context/AuthorsContextProvider";
import { DataContext } from "../../context/DataContextProvider";
import { ModalContext } from "../../context/ModalContextProvider";
import { NavbarContext } from "../../context/NavbarContextProvider";
import Modal from "../Modal/Modal";
import DeleteModal from "../Modal/ModalComponents/DeleteModal";
import EditResource from "../Modal/ModalComponents/EditResource";
import SeeDetails from "../Modal/ModalComponents/SeeDetails";
import Pagination from "../Reusable/Pagination";
import Results from "../Reusable/Results";
import Search from "../Reusable/Search";
import ResourcesTable from "./ResourcesTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";

const ResourcesPage = () => {
  //CONTEXT
  const { data, getData, setData } = useContext(DataContext);
  const {
    deleteModal,
    setDeleteModal,
    detailsModal,
    setDetailsModal,
    editModal,
    setEditModal,
  } = useContext(ModalContext);
  const { setActiveNavLink } = useContext(NavbarContext);
  const { getAuthors } = useContext(AuthorsContext);

  //STATE
  const [deleteId, setDeleteId] = useState();
  const [resource, setResource] = useState({});
  const [search, setSearch] = useState("");
  const [cancel, setCancel] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [type, setType] = useState("");
  useEffect(() => {
    getData(emptySearch);
    getAuthors();
    setActiveNavLink(RESOURCES_PAGE_ID);
    return () => setData([]);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      getData(search);
      setCancel(true);
      setLoading(false);
      setSearch("");
    }
  };

  const cancelSearch = () => {
    getData(emptySearch);
    setCancel(false);
    setSearch("");
  };
  const selectArray = ["Book", "CD", "Magazine", "Video Tape"];
  const paginatedData = data.slice(
    page * defaultResourceSize,
    page * defaultResourceSize + defaultResourceSize
  );
  return (
    <div className="resources-page container">
      <div>
        <form onSubmit={handleSubmit} className="resources-page-form">
          <Search
            search={search}
            setSearch={setSearch}
            label="Search by Name"
          />
          <button className="btn add search-btn">Search</button>
          {cancel && (
            <button onClick={cancelSearch} className="btn cancel  cancel-btn">
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
          )}
        </form>
      </div>
      <div className="resources-page-select">
        <FormControl className="resources-select" variant="outlined" >
          <InputLabel id="demo-simple-select-outlined-label">Select Type</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={type || "All"}
            // onChange={handleChange}
            label="Select Type"
          >
              <MenuItem onClick={()=>{setType("")}} value="All">All</MenuItem>
              {
                  selectArray.map((item)=><MenuItem key={item} onClick={()=>{setType(item)}} value={item}>{item}</MenuItem>)
              }
          </Select>
        </FormControl>
      </div>
      <div>
        {deleteModal && (
          <Modal setDeleteModal={setDeleteModal}>
            <DeleteModal
              deleteModal={deleteModal}
              setDeleteModal={setDeleteModal}
              deleteId={deleteId}
              getData={getData}
            />
          </Modal>
        )}
        {detailsModal && (
          <Modal>
            <SeeDetails
              detailsModal={detailsModal}
              setDetailsModal={setDetailsModal}
              resource={resource}
            />
          </Modal>
        )}
        {editModal && (
          <Modal>
            <EditResource
              getData={getData}
              editModal={editModal}
              setEditModal={setEditModal}
              resource={resource}
            />
          </Modal>
        )}
      </div>
      <div className="resources-page-middle">
        <ResourcesTable
          data={paginatedData}
          setDeleteModal={setDeleteModal}
          setDeleteId={setDeleteId}
          setDetailsModal={setDetailsModal}
          setResource={setResource}
          setEditModal={setEditModal}
          loading={loading}
        />
      </div>
      <div className="resources-page-bottom">
        <Results
          results={data.length}
          pages={Math.ceil(data.length / defaultResourceSize)}
        />
        <Pagination dataLength={data.length} page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default ResourcesPage;

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faPlus,
  faUndoAlt,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../Reusable/Tooltip";
import Loading from "../Reusable/Loading";
import { colorType } from "../../helpers/helpers";

const ResourcesTable = ({
  data,
  setDeleteModal,
  setDeleteId,
  setDetailsModal,
  setResource,
  setEditModal,
  loading,
  borrowed,
  handleReturn,
  handleBorrowed,
  role,
}) => {
  if (!data.length && loading) {
    return (
      <div className="loading">
        <Loading />
      </div>
    );
  }

  if (!data.length && !loading) {
    return (
      <div className="loading">
        <h4>No Resources Found!</h4>
      </div>
    );
  }

  console.log(data);
  return (
    <div className="resources-table">
      <table className="striped centered">
        <thead className="centered">
          <tr>
            <th>Name</th>
            <th style={{ width: "10%" }}>Type</th>
            <th></th>

            <th>Authors / Editors</th>
            <th>Description</th>
            <th>Quantity</th>
            <th style={{ width: "30%" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.map((res) => (
              <tr key={res.id}>
                <td>{res.name}</td>
                <td style={{ width: "10%" }}>{res.type}</td>
                <td>
                  <FontAwesomeIcon
                    style={{
                      color: res.type && colorType(res.type).color,
                      fontSize: "1.5rem",
                    }}
                    icon={res.type && colorType(res.type && res.type).icon}
                  />
                </td>

                <td style={{ width: "20%" }}>
                  {res.authors &&
                    res.authors.map((author) => (
                      <span
                        style={{ margin: "1px" }}
                        key={author.id}
                        className="new badge blue"
                        data-badge-caption={author.name}
                      ></span>
                    ))}
                </td>
                <td>{res.description && res.description.slice(0, 50)}...</td>
                <td>{res.quantity}</td>
                <td>
                  <div className="btn-group">
                    <button
                      onClick={() => {
                        setResource(res);
                        setDetailsModal(true);
                      }}
                      className="btn info tooltip"
                    >
                      <Tooltip message="View Details" />
                      <FontAwesomeIcon icon={faInfo} />
                    </button>

                    {borrowOrReturn(
                      borrowed,
                      res,
                      handleReturn,
                      handleBorrowed
                    )}

                    {checkEmptyBorrowed(borrowed, handleBorrowed, res)}

                    {role === "Admin" && (
                      <button
                        onClick={() => {
                          setResource(res);
                          setEditModal(true);
                        }}
                        className="btn edit tooltip"
                      >
                        <Tooltip message="Edit" />
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </button>
                    )}

                    {role === "Admin" && (
                      <button
                        onClick={() => {
                          setDeleteId(res.id);
                          setDeleteModal(true);
                        }}
                        className="btn delete tooltip"
                      >
                        <Tooltip message="Delete" />
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResourcesTable;

function checkEmptyBorrowed(borrowed, handleBorrowed, res) {
  return !borrowed ? (
    <button onClick={() => handleBorrowed(res)} className="btn add tooltip">
      <Tooltip message="Borrow" />
      <FontAwesomeIcon icon={faPlus} />
    </button>
  ) : null;
}

function borrowOrReturn(borrowed, res, handleReturn, handleBorrowed) {
  return borrowed ? (
    borrowed.find((resource) => resource.id === res.id) ? (
      <button onClick={() => handleReturn(res)} className="btn add tooltip">
        <Tooltip message="Return" />
        <FontAwesomeIcon icon={faUndoAlt} />
      </button>
    ) : (
      <button
        disabled={res.quantity === 0}
        onClick={() => handleBorrowed(res)}
        className="btn add tooltip"
      >
        <Tooltip message="Borrow" />
        <FontAwesomeIcon icon={faPlus} />
      </button>
    )
  ) : null;
}

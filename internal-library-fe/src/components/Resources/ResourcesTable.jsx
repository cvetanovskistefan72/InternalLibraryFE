import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faPlus,
  faUndoAlt,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../Reusable/Tooltip";

const ResourcesTable = ({
  data,
  setDeleteModal,
  setDeleteId,
  setDetailsModal,
  setResource,
}) => {
  return (
    <div className="resources-table">
      <table className="striped centered">
        <thead className="centered">
          <tr>
            <th className="center" style={{ width: "5%" }}>
              Id
            </th>
            <th>Type</th>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th style={{ width: "30%" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((res) => (
            <tr key={res.id}>
              <td className="center" style={{ width: "5%" }}>
                {res.id}
              </td>
              <td>{res.type}</td>
              <td>{res.name}</td>
              <td>{res.description.slice(0, 50)}...</td>
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

                  <button className="btn add tooltip">
                    <Tooltip message="Borrow" />
                    <FontAwesomeIcon icon={faPlus} />
                  </button>

                  <button className="btn edit tooltip">
                    <Tooltip message="Edit" />
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>

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

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faPlus,
  faUndoAlt,
  faInfo,
  faCompactDisc,
  faNewspaper,
  faTape,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../Reusable/Tooltip";

const ResourcesTable = ({
  data,
  setDeleteModal,
  setDeleteId,
  setDetailsModal,
  setResource,
  setEditModal,
}) => {
  const colorType = (res) => {
    let type;
    if (res.type === "Book") {
      type = { icon: faBook, color: "#b71c1c" };
    }
    if (res.type === "CD") {
      type = { icon: faCompactDisc, color: "#01579b" };
    }
    if (res.type === "Magazine") {
      type = { icon: faNewspaper, color: "#1b5e20" };
    }
    if (res.type === "Video Tape") {
      type = { icon: faTape, color: "#f57f17" };
    }

    return type;
  };

  return (
    <div className="resources-table">
      <table className="striped centered">
        <thead className="centered">
          <tr>
            <th className="center" style={{ width: "5%" }}>
              Id
            </th>
            <th>Type</th>
            <th></th>
            <th>Name</th>
            <th>Authors / Editors</th>
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
              <td>
                <FontAwesomeIcon
                  style={{ color: colorType(res).color, fontSize: "1.5rem" }}
                  icon={colorType(res).icon}
                />
              </td>
              <td>{res.name}</td>
              <td style={{ width: "20%" }}>
                {" "}
                {res.authors.map((author) => (
                  <span
                    style={{ margin: "1px" }}
                    key={author.id}
                    class="new badge blue"
                    data-badge-caption={author.name}
                  ></span>
                ))}
              </td>
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

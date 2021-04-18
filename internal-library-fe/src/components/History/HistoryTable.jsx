import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { colorType, processUserEmail } from "../../helpers/helpers";
import Loading from "../Reusable/Loading";

const HistoryTable = ({ loading, data,users }) => {
  if (!data.length && loading) {
    return (
      <div style={{ marginTop: "100px" }} className="loading">
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

  console.log(users)
  return (
    <div className="history-table">
      <table className="striped centered">
        <thead className="centered">
          <tr>
            <th>Name</th>

            <th>Type</th>
            <th></th>
            <th style={{ width: "10%" }}>Borrowed Date</th>
            <th>User</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.map((history) => (
              <tr key={history.id}>
                <td>{history.resourceName}</td>
                <td style={{ width: "10%" }}>{history.type}</td>
                <td>
                  <FontAwesomeIcon
                    style={{
                      color: history.type && colorType(history.type).color,
                      fontSize: "1.5rem",
                    }}
                    icon={history.type && colorType(history.type).icon}
                  />
                </td>
                <td>{history.borrowedDate}</td>

                <td>{ history.userId && (processUserEmail(users,history.userId))}</td>
                <td>
                  <span
                    style={{
                      width: "100px",
                      backgroundColor:
                        history.status === "borrowed" ? "#b71c1c" : "#1b5e20",
                      fontWeight: "bold",
                    }}
                    className="new badge card-title-type"
                    data-badge-caption={history.status}
                  ></span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;

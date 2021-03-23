import React from "react";
import { defaultResourceSize } from "../../config/config";

const Pagination = ({ dataLength, page, setPage }) => {
  const paginationlength = makeList(dataLength);
  console.log(page);
  return (
    <ul className="pagination">
        
      {page > 0 && (
        <li onClick={() => setPage(page - 1)}>
          <a href="#!">
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
      )}

      {paginationlength.map((index) => {
        return (
          <li
            key={index}
            style={
              ({ margin: "2px" },
              { backgroundColor: page === index ? "#01579b" : "white" })
            }
            className="waves-effect"
            onClick={() => setPage(index)}
          >
            <a style={{ color: page === index ? "white" : "black" }}>
              {index + 1}
            </a>
          </li>
        );
      })}

      {page+1 < dataLength / defaultResourceSize && (
        <li onClick={() => setPage(page + 1)} className="waves-effect">
          <a>
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      )}

    </ul>
  );
};

export default Pagination;
function makeList(dataLength) {
  let list = [];
  for (let i = 0; i < Math.ceil(dataLength / defaultResourceSize); i++) {
    list.push(i);
  }
  return list;
}

import {
  faPaperPlane,
  faPlus,
  faUndoAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HOME_PAGE_ID } from "../../config/config";
import { BorrowedContext } from "../../context/BorrwedContextProvider";
import { NavbarContext } from "../../context/NavbarContextProvider";
import { colorType } from "../../helpers/helpers";
import Tooltip from "../Reusable/Tooltip";

const HomePage = () => {
  const { setActiveNavLink } = useContext(NavbarContext);
  const { borrowed, getBorrowed, handleReturn, handleBorrowed } = useContext(
    BorrowedContext
  );
  useEffect(() => {
    setActiveNavLink(HOME_PAGE_ID);
    const user = JSON.parse(localStorage.getItem("userData"));
    getBorrowed(user.homeId);
  }, []);

  console.log(borrowed);
  return (
    <div className="">
      <div class="header">
        <h1>Welcome to Internal Library</h1>
        <Link to="/resources" className="header-link">
          <button className="btn">
            <span>See Available Resources </span>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </Link>
      </div>

      <div className="home-page container">
        <div class="row">
          {borrowed
            && borrowed.map((resource) => {
                return (
                  <div key={resource.id} class="col s12 m12 l4">
                    <div className="card z-depth-2">
                      <div class="card-content">
                        <div class="card-title">
                          <h5> {resource.name}</h5>
                          <span
                            style={{
                              width: "100px",
                              backgroundColor: "#01579b",
                              fontWeight: "bold",
                            }}
                            class="new badge card-title-type"
                            data-badge-caption={resource.type}
                          ></span>
                        </div>

                        <p className="card-paragraph">{resource.description}</p>
                        <div className="card-authors">
                          {resource.authors.map((author) => (
                            <span
                              style={{ margin: "1px" }}
                              key={author.id}
                              class="new badge blue"
                              data-badge-caption={author.name}
                            ></span>
                          ))}
                        </div>
                      </div>
                      <div class="card-action">
                        <button
                          onClick={() => handleReturn(resource)}
                          className="btn edit tooltip"
                        >
                          <span>Return </span>
                          <FontAwesomeIcon icon={faUndoAlt} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

            
        </div>
       <div className="home-page-empty">
         {borrowed && (!borrowed.length ? <h4>No Resources Borrowed</h4>:null) }
       </div>
      </div>
    </div>
  );
};

export default HomePage;

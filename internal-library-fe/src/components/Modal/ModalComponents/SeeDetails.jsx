import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CloseModalButton from "../../Reusable/CloseModalButton";

const SeeDetails = ({ detailsModal, setDetailsModal, resource }) => {
  if (!detailsModal) return null;

  return (
    <div className="details-modal">
      <div class="card">
        <CloseModalButton setClose={setDetailsModal} />
        <div class="card-content">
          <div>
            <h5>{resource.name}</h5>
            <br />
            <p>{resource.description}</p>
            <br/>
         
           {resource.authors.map((author) => (
                  <span
                    style={{ margin: "1px" }}
                    key={author.id}
                    class="new badge blue"
                    data-badge-caption={author.name}
                  ></span>
                ))}
         
            <br />
            <br />
            <br />
            <h6>{resource.quantity} items left</h6>
          </div>
        </div>
        <div class="card-action">
          <button onClick={() => setDetailsModal(false)} className="btn cancel">
            Close
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;

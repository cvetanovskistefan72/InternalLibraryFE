import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const CloseModalButton = ({ setClose, icon }) => {
  return (
    <div className="close-modal-upper">
      <FontAwesomeIcon
        onClick={() => setClose(false)}
        style={{ color: "#b71c1c", fontSize: "1.5rem", cursor: "pointer" }}
        icon={faWindowClose}
      />
    </div>
  );
};

export default CloseModalButton;

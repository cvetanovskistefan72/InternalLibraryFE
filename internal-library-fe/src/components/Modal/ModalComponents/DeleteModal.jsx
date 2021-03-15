import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteResource } from "../../../api/crud-api";
import CloseModalButton from "../../Reusable/CloseModalButton";

const DeleteModalComponent = ({
  deleteModal,
  setDeleteModal,
  deleteId,
  getData,
}) => {
  if (!deleteModal) return null;

  return (
    <div className="delete-modal">
      <CloseModalButton setClose={setDeleteModal} />
      <div className="delete-modal-middle">
        <h5>Confirm Delete?</h5>
      </div>
      <div className="delete-modal-bottom">
        <button onClick={() => setDeleteModal(false)} className="btn cancel">
          Cancel
        </button>
        <button
          onClick={async () => {
            await deleteResource(deleteId);
            await getData();
            setDeleteModal(false);
          }}
          className="btn delete"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DeleteModalComponent;

import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CloseModalButton from "../../Reusable/CloseModalButton";
import { editResource } from "../../../api/crud-api";

const EditResource = ({ getData,editModal, setEditModal, resource }) => {
  useEffect(() => {


  }, []);

  const [type, setType] = useState(resource.type || "");
  const [name, setName] = useState(resource.name || "");
  const [description, setDescription] = useState(resource.description || "");
  const [quantity, setQuantity] = useState(resource.quantity || "");

  const [error, setError] = useState([]);

  const selectArray = ["Book", "CD", "Magazine", "Video Tape"];

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const { data }  = await editResource({ type, name, description, quantity })
    setError(data)
    if (!data) {
        getData()
        setEditModal(false)};

  };

  return (
    <form onSubmit={handleSubmit} className="edit-resource">
      <div className="edit-form">
        <div className="edit-body">
          <CloseModalButton setClose={setEditModal} />
          <div className="edit-header">
            <h4>Edit Resource</h4>
          </div>
          <hr color="gray" />
          <Autocomplete
            options={selectArray}
            defaultValue={resource.type && resource.type}
            getOptionLabel={(option) => {
              setType(option);
              return option;
            }}
            id="edit-select"
            disabled={resource.type && true}
            className="edit-select"
            renderInput={(params) => (
              <TextField {...params} label="Type" margin="normal" />
            )}
          />
          <div className="error-message">
            <span>{error && error.type}</span>
          </div>

          <div className="input-field active">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="name"
              type="text"
              className="validate"
              clicked
            />
            <label className={resource.name && "active"} for="name">Name</label>
            <div className="error-message">
              <span>{error && error.name}</span>
            </div>
          </div>
          <div className="input-field">
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              id="description"
              className="materialize-textarea"
            ></textarea>
            <label className={resource.description && "active"} for="description">Description</label>
            <div className="error-message">
              <span>{error && error.description}</span>
            </div>
          </div>
          <div className="input-field">
            <input
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
              id="quantity"
              type="number"
              class="validate"
            />
            <label className={resource.quantity && "active"} for="quantity">Quantity</label>
            <div className="error-message">
              <span>{error && error.quantity}</span>
            </div>
          </div>
          <div className="input-field">
            <button className="edit-button btn">Edit</button>
          </div>
          <div className="edit-back-section">
            <a
              onClick={() => {
                setEditModal(false);
              }}
              className="edit-back-button"
            >
              Back to Home Page
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditResource;

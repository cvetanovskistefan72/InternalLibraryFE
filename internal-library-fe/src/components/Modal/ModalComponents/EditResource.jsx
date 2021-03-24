import React, { useContext, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CloseModalButton from "../../Reusable/CloseModalButton";
import { editResource } from "../../../api/crud-api";
import { Chip } from "@material-ui/core";
import { AuthorsContext } from "../../../context/AuthorsContextProvider";
import { emptySearch, emptyType } from "../../../config/config";

const EditResource = ({ getData,editModal, setEditModal, resource }) => {
  



  const { authors: authorsData, getAuthors } = useContext(AuthorsContext)

  useEffect(() => {
    getAuthors()
  }, []);

  const [id,setId] = useState(resource.id)
  const [type, setType] = useState(resource.type || "");
  const [name, setName] = useState(resource.name || "");
  const [description, setDescription] = useState(resource.description || "");
  const [quantity, setQuantity] = useState(resource.quantity || "");
  const [finalAuthors,setFinalAuthors] = useState(resource.authors.map((author)=>author.name))
  const [error, setError] = useState([]);

  const selectArray = ["Book", "CD", "Magazine", "Video Tape"];

  const handleSubmit = async (e) => {
    e.preventDefault()
    const authors = handleAuthors()
    console.log(authors)
    const { data }  = await editResource({id, type, name, description, quantity,authors })
    setError(data)
    if (!data) {
        await getData(emptySearch,emptyType)
        setEditModal(false)
      };

  };

  const handleAuthors = ()=>{
    const oldAuthors = authorsData.filter((author)=>finalAuthors.find((selectedAuthor)=>author.name===selectedAuthor))
    const newAuthors = finalAuthors.filter((selectedAuthor)=>!authorsData.find((author)=>author.name===selectedAuthor))
    .map((newAuthor)=>{return {name:newAuthor}})
    return [...oldAuthors,...newAuthors]
  }
  console.log(finalAuthors)
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
            />
            <label className={resource.quantity && "active"} for="quantity">Quantity</label>
            <div className="error-message">
              <span>{error && error.quantity}</span>
            </div>
          </div>
          <Autocomplete
            multiple
            id="create-multiple"
           defaultValue={finalAuthors}
            options={authorsData && authorsData.map((option) => option.name)}
            freeSolo
            renderTags={(value, getAuthorProps) =>{
                setFinalAuthors(value)
                return  value.map((option, index) => {
                
                   return (
                    <Chip
                    variant="outlined"
                    label={option}
                    {...getAuthorProps({ index })}
                  />
                   )
                })
            }
             
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Authors/Writers"
              />
            )}
          />
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

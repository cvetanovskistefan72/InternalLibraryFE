import React, { useContext, useEffect, useState } from "react";
import { CREATE_PAGE_ID } from "../../config/config";
import { NavbarContext } from "../../context/NavbarContextProvider";
import TextField from "@material-ui/core/TextField";
import Chip from '@material-ui/core/Chip';
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Link } from "react-router-dom";
import { createResource } from "../../api/crud-api";
import { AuthorsContext } from "../../context/AuthorsContextProvider";

const CreateResource = ({ history }) => {
  const { setActiveNavLink } = useContext(NavbarContext);
  const { authors: authorsData, getAuthors } = useContext(AuthorsContext)

  useEffect(() => {
    setActiveNavLink(CREATE_PAGE_ID);
    getAuthors()
  }, []);

  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [finalAuthors,setFinalAuthors] = useState([])
  const [error, setError] = useState([]);

  const selectArray = ["Book", "CD", "Magazine", "Video Tape"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authors = handleAuthors()
    const { data } = await createResource({
      type,
      name,
      description,
      quantity,
      authors
    });
    setError(data);
    if (!data) history.push("/resources");
  };

  const handleAuthors = ()=>{
    const oldAuthors = authorsData.filter((author)=>finalAuthors.find((selectedAuthor)=>author.name===selectedAuthor))
    const newAuthors = finalAuthors.filter((selectedAuthor)=>!authorsData.find((author)=>author.name===selectedAuthor))
    .map((newAuthor)=>{return {name:newAuthor}})
    return [...oldAuthors,...newAuthors]
  }
 
  return (
    <form onSubmit={handleSubmit} className="create-resource">
      <div className="create-form">
        <div className="create-body">
          <div className="create-header">
            <h4>Create Resource</h4>
          </div>
          <hr color="gray" />
          <Autocomplete
            options={selectArray}
            getOptionLabel={(option) => {
              setType(option);
              return option;
            }}
            id="create-select"
            className="create-select"
            renderInput={(params) => (
              <TextField {...params} label="Type" margin="normal" />
            )}
          />
          <div className="error-message">
            <span>{error && error.type}</span>
          </div>

          <div class="input-field">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="name"
              type="text"
              class="validate"
            />
            <label for="name">Name</label>
            <div className="error-message">
              <span>{error && error.name}</span>
            </div>
          </div>
          <div class="input-field">
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              id="description"
              class="materialize-textarea"
            ></textarea>
            <label for="description">Description</label>
            <div className="error-message">
              <span>{error && error.description}</span>
            </div>
          </div>
          <div class="input-field">
            <input
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
              id="quantity"
              type="number"
              class="validate"
            />
            <label for="quantity">Quantity</label>
            <div className="error-message">
              <span>{error && error.quantity}</span>
            </div>
          </div>
          <Autocomplete
            multiple
            id="create-multiple"
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
            <button   className="create-button btn">Create</button>
          </div>
          <div className="create-back-section">
            <Link className="create-back-button" to="/">
              Back to Home Page
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateResource;

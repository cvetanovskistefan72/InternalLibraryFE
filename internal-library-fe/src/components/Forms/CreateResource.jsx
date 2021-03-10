import React, { useContext, useEffect, useState } from 'react'
import { CREATE_PAGE_ID } from '../../config/config'
import { NavbarContext } from '../../context/NavbarContextProvider'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createResource } from '../../api/crud-api';
import { Link } from 'react-router-dom';

const CreateResource = ({ history }) => {
    const { setActiveNavLink } = useContext(NavbarContext)

    useEffect(() => {
        setActiveNavLink(CREATE_PAGE_ID)
    }, [])



    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");

    const [error, setError] = useState([])



    const selectArray = ["Book", "CD", "Magazine", "Video Tape"]

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { data}  = await createResource({ type, name, description, quantity })
        setError(data)
        if (!data) history.push('/resources')
        

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
                            setType(option)
                            return option
                        }}
                        id="create-select"
                        className="create-select"
                        renderInput={(params) => <TextField {...params} label="Type" margin="normal" />}
                    />
                    <div className="error-message">
                        <span  >{error && error.type}</span>
                    </div>

                    <div class="input-field">
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            id="name"
                            type="text"
                            class="validate" />
                        <label for="name">Name</label>
                        <div className="error-message">
                            <span  >{error && error.name}</span>
                        </div>
                    </div>
                    <div class="input-field">
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            id="description"
                            class="materialize-textarea"></textarea>
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
                            class="validate" />
                        <label for="quantity">Quantity</label>
                        <div className="error-message">
                            <span  >{error && error.quantity}</span>
                        </div>
                    </div>
                    <div className="input-field">
                        <button className="create-button btn">Create</button>
                    </div>
                    <div className="create-back-section">
                        <Link className="create-back-button" to="/">Back to Home Page</Link>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CreateResource


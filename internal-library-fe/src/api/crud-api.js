import axios from 'axios'
import { URL } from '../config/config'

export const getDataApi = async (search,type) => {
   let response = {}
    await axios.get(`${URL}/resources/search?Text=${search.trim()}&Type=${type === "All"?"":type}`)
        .then((resp) => {
            response=resp
        }).catch((err) => {
            console.log(err)
        })
  return response
}

export const deleteResource = async (id) => {
    await axios.delete(`${URL}/resources/${id}`)
        .then((resp) => {
        console.log(resp)
    }).catch((err) => {
        console.log(err.message)
    })
}

export const createResource = async (resource)=> {
    let response = {}
    await axios.post(`${URL}/resources`, resource)
        .then((resp) => {
          
    }).catch((error) => {
        response = error.response
    })

    return response
}

export const editResource = async (resource)=> {
    let response = {}
    await axios.put(`${URL}/resources`, resource)
        .then((resp) => {
          
    }).catch((error) => {
        response = error.response
    })

    return response
}


//AUTHORS

export const getAuthorsData= async ()=>{
    let response;
    await axios.get(`${URL}/authors`)
    .then((resp)=>{
        response=resp
    }).catch((err)=>{
        console.log(err)
    })

    return response
}

export const postBorrowed = async(borrowed) =>{
    await axios.post(`${URL}/borrowed`,borrowed)
    .then((resp)=>{
        console.log(resp)
    })
}

export const putReturn = async(returned) =>{
    await axios.put(`${URL}/borrowed/return`,returned)
    .then((resp)=>{
        console.log(resp)
    })
}

export const getBorrowedData = async (userId) => {
    let response;
    await axios.get(`${URL}/borrowed/${userId}`)
    .then((resp)=>{
        response=resp
    }).catch((err)=>{
        console.log(err)
    })

    return response
}
import axios from 'axios'
import { URL } from '../config/config'

export const getDataApi = async () => {
   let response = {}
    await axios.get(`${URL}/resource`)
        .then((resp) => {
            response=resp
        }).catch((err) => {
            console.log(err)
        })
  return response
}

export const deleteResource = async (id) => {
    await axios.delete(`${URL}/resource/${id}`)
        .then((resp) => {
        console.log(resp)
    }).catch((err) => {
        console.log(err.message)
    })
}

export const createResource = async (resource)=> {
    let response = {}
    await axios.post(`${URL}/resource`, resource)
        .then((resp) => {
          
    }).catch((error) => {
        response = error.response
    })

    return response
}
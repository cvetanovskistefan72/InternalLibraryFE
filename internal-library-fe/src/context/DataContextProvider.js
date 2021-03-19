import React, { createContext, useState } from 'react'
import {getDataApi} from '../api/crud-api'
export const DataContext = createContext()

const DataContextProvider = (props) => {
    const [data, setData] = useState([])

    const getData = async (search,type) => {
        await getDataApi(search,type).then(({data}) => {
            setData(data)
        }).catch((err) => {
            console.log(err)
        })
    }
    
    const values = {
        data,
        getData,
        setData
    }
    return (
        <DataContext.Provider value={values}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider

import React, { createContext, useState } from 'react'
import {getDataApi, getHistoryApi} from '../api/crud-api'
export const DataContext = createContext()

const DataContextProvider = (props) => {
    const [data, setData] = useState([])

    const getData = async (search,type) => {
        await getDataApi(search,type).then(({data}) => {
            const sortedData = data
            sortedData.sort((a,b)=>a.name.toLowerCase()>b.name.toLowerCase()    )
            setData(data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getHistory = async () =>{
        await getHistoryApi().then(({data})=>{
            const reversedData = data
            reversedData.reverse()
            setData(reversedData)
        }).catch((err)=>{
            console.log(err)
        })

    }
    
    const values = {
        data,
        getData,
        setData,
        getHistory
    }
    return (
        <DataContext.Provider value={values}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider

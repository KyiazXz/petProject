import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'

const api = 'https://dummyjson.com/users' ;


function BasicAPI() {
const [data , setData] = useState ( [ ] );

const fetchData = fetch (api).then ((res)=>res.json()).then((data)=>setData(data.users))


  return (
    <>
    {data.map((item)=>{
        return (<> 
        <h2>{item.firstName}</h2>
        <img src={item.image} alt={item.lastName}/> 
        <h4>{item.phone}</h4>
        <p>{item.bank.cardNumber}</p>
        </>)
    })}
    </>
  )
}

export default BasicAPI
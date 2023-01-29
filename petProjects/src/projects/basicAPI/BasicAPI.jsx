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
    // yoiu can simplify your code as destructring
    const {firsName,image,lastName,phone,bank.cardNumber} = item;
        return (
          <> 
        <h2>{firstName}</h2>
        <img src={image} alt={lastName}/> 
        <h4>{phone}</h4>
        <p>{bank.cardNumber}</p>
         </>
        )
    })}
    </>
  )
}

export default BasicAPI

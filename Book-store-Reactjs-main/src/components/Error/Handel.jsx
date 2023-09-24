import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
function Handel() {
  const [book,setbook]  =useState();

  const Handes=async(id)=>{
    const test = await axios.get('http://127.0.0.1:5000/api/getBooksByMultipleRentRanges?rentRanges=100-200,200-500');
    console.log(test.data.books);
    setbook(test.data.books);
  }
   
  useEffect(()=>{Handes();},[])
          console.log(book[0].author);      

  return (
    <div>
    <h1>{book[0].author}</h1>
      
    </div>
  )
}

export default Handel

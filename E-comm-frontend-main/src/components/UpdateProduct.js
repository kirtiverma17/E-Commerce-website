import React, { useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom';
const UpdateProduct=()=>{
  const [name,setName]=React.useState("");
  const [price,setPrice]=React.useState("");
  const [category,setCategory]=React.useState("");
  const [company,setCompany]=React.useState("");
  const params=useParams();
  const navigate = useNavigate()
  useEffect(()=>{
    
    getProductDetails();
  },[])


  const getProductDetails=async()=>{
    console.warn(params)
    let result=await fetch(`https://e-comm-dashboard-api.onrender.com/product/${params.id}`,{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
     result= await result.json();
    setName(result[0].name)
    setPrice(result[0].price)
    setCategory(result[0].category)
    setCompany(result[0].company)
    console.warn(result[0])
    
  }
  // const [error,setError]=React.useState(false)
  const UpdateProduct= async()=>{
    console.warn(name,price,category,company)
    let result = await fetch(`https://e-comm-dashboard-api.onrender.com/product/${params.id}`,{
      method:'Put',
      body:JSON.stringify({name,price,category,company}),
      headers:{
        'Content-Type':"application/json",
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
    console.warn(result);
    navigate('/');
  }
  return(

    <div className="product">
    <h1> Update Product</h1>
    <input type="text"placeholder="Enter Product name" className="inputBox" value={name}onChange={(e)=>{setName(e.target.value)}}/>
    <input type="text"placeholder="Enter Product price"className="inputBox"value={price}onChange={(e)=>{setPrice(e.target.value)}}/>

    <input type="text"placeholder="Enter Product category"className="inputBox"value={category}onChange={(e)=>{setCategory(e.target.value)}}/>

    <input type="text"placeholder="Enter Product company"className="inputBox"value={company}onChange={(e)=>{setCompany(e.target.value)}}/>

      <button onClick={UpdateProduct} className="appButton">Update Product</button>
    </div>
  )
}


export default UpdateProduct;
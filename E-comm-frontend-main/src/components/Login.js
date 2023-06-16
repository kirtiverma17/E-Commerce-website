import React, { useEffect } from 'react'
import {Navigate, useNavigate} from 'react-router-dom' 
import { json } from 'react-router-dom';
const Login=()=>{
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');
    let navigate=useNavigate();
    useEffect (()=>{
      const auth=localStorage.getItem('user'); 
      if(auth){
        navigate("/");
      }
    })
    const handleLogin=async ()=>{
        console.warn(email,password);
        let result = await fetch('https://e-comm-dashboard-api.onrender.com/login', {
      method:'post',
      body:JSON.stringify({ email, password }),
      headers: {
        'Content-Type':'application/json'
      },
    });
    result=await result.json();
    console.warn(result);
    if(result.auth){
        localStorage.setItem("user",JSON.stringify(result.user));
        localStorage.setItem("token",JSON.stringify(result.auth));

        navigate("/");
    }
    else{
        alert("please signup")
    }
    }

    return(
    <div className='login'>
        <input type='text'className="inputBox"placeholder='Enter Email'
        onChange={(e)=>setEmail(e.target.value)}value={email}/>
        <input type='password'className="inputBox"placeholder='Enter Password'
        onChange={(e)=>setPassword(e.target.value)}value={password} />
      <button className="appButton"onClick={handleLogin} type="button">Login</button>

    </div>
    )
}


export default Login
import React, { useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';
 

// import { Link } from 'react-router-dom';
const Nav=()=>{
    const auth=localStorage.getItem('user');
    const Navigate=useNavigate();
    const logout = ()=>{
        localStorage.clear();
        Navigate('/signup');
    }
    return(
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3N6k_ldG7m9XVCoNfBrtEbqeGH5jAozqihxx_oBUcRzzLEUuRORfeCKXCnh9UxPme5U&usqp=CAU" alt="logo"
            className='logo' />
           { auth ? <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
                
            </ul>
            :   
            <ul className="nav-ul nav-right">
                 <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/login">Login</Link></li> 
            </ul>
            }
        </div>
    ) 
} 
export default Nav;
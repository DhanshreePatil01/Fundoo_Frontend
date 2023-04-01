import './header.css';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SettingsIcon from '@mui/icons-material/Settings';
// import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {connect} from 'react-redux';
import Button from '@mui/material/Button';
import {redirect} from "react-router-dom";

function Header({listenToHeader,title}){

    function deleteToken() {
        localStorage.removeItem("token");
        return redirect("/");

        // return <Navigate to="/" />;
      }

    return(
        <div className="header">
      
       <div className="h1">
           <div className="i1" onClick={()=>listenToHeader()}><MenuIcon /></div>
          
           <div className="i2"><img src= './images/Logo.png' 
           height = "55" alt='' /></div>
           <div className="i3" >{title}</div>
       </div>
       
       
       <div className="h2">
           <div className="middle1"><SearchIcon /></div>
           <p className="middle2">Search</p>
       </div>
       
       <div className="h3">
           <div className="c1"><RefreshIcon /></div>
           <div className="c2"><ViewStreamIcon/></div>
           <div className="c3"><SettingsIcon/></div>
       </div>
       
       
       <div className="h4">
       <Button variant="outlined" onClick={deleteToken} href='/'>Logout</Button>
           {/* <div className="d1"><AppsIcon/></div> */}
           <div className="d2"><AccountCircleIcon/></div>
       </div>
  
  
  
   </div> 

        
    ) 
}

const mapStateToProps=(state)=>{
//    console.log("Hello",state);
return{
    title:state.navReducer.title
}

}
export default connect(mapStateToProps)(Header)
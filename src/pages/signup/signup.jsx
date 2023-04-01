import './signup.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';
import React from 'react';
import { signingUp } from '../../services/userservice';
// eslint-disable-next-line
import { redirect } from 'react-router-dom';
// eslint-disable-next-line
import { Outlet, Navigate } from "react-router-dom";

const firstnameregex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
const lastnameregex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
// eslint-disable-next-line
const usernameregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

function Signup(){


    const [signUpObj,setSignUpObj] = React.useState({ 
        firstname: "", 
        lastname: "",
        email:"", 
        password:""
        })

    const [regexObj,setRegexObj] = React.useState({
            firstnameError :false,
            firstnameHelper : "",
            lastnameError : false,
            lastnameHelper : "",
            emailError : false,
            emailHelper : "",
            passwordError : false,
            passwordHelper : ""
          }); 
          
     const takeFirstname = function(event) {
        setSignUpObj((prevState) => ({
            ...prevState,
            firstname : event.target.value
        }));
     }
     
     const takeLastname = function(event) {
        setSignUpObj((prevState)=>({
            ...prevState,
            lastname : event.target.value
        }));
     }

     const takeUsername = function(event) {
        setSignUpObj((prevState)=>({
            ...prevState,
            email : event.target.value
        }));
     }

     const takePassword = function(event) {
        setSignUpObj((prevState) => ({
            ...prevState,
            password : event.target.value
        }));
     }

     const signUp = async() => {
       let firstnameTest = firstnameregex.test(signUpObj.firstname);
       let lastnameTest = lastnameregex.test(signUpObj.lastname);
       let usernameTest = usernameregex.test(signUpObj.email);
       let passwordTest = passwordregex.test(signUpObj.password);

       console.log(firstnameTest,lastnameTest,usernameTest,passwordTest);

       if(firstnameTest === false){
        setRegexObj((prevState)=>({
            ...prevState,
            firstnameError : true,
            firstnameHelper : "Enter Correct First name" 
        }));
       } else {
         setRegexObj((prevState)=>({
            ...prevState,
            firstnameError : false,
            firstnameHelper : ""
         }));
       }
       if(lastnameTest === false){
        setRegexObj((prevState)=>({
            ...prevState,
            lastnameError : true,
            lastnameHelper : "Enter Correct Last name" 
        }));
       } else {
         setRegexObj((prevState)=>({
            ...prevState,
            lastnameError : false,
            lastnameHelper : ""
         }));
       }
       if(usernameTest === false){
        setRegexObj((prevState)=>({
            ...prevState,
            emailError : true,
            emailHelper : "Enter Correct User name" 
        }));
       } else {
         setRegexObj((prevState)=>({
            ...prevState,
            emailError : false,
            emailHelper : ""
         }));
       }
       if(passwordTest === false){
        setRegexObj((prevState)=>({
            ...prevState,
            passwordError : true,
            passwordHelper : "Enter Correct Password" 
        }));
       } else {
         setRegexObj((prevState)=>({
            ...prevState,
            passwordError : false,
            passwordHelper : ""
         }));
       }

         if (firstnameTest === true && lastnameTest === true && usernameTest === true && passwordTest === true) {
             let response = signingUp(signUpObj);
             console.log(response);
             console.log('User Signed Up Successfully...');
            //  return redirect("/");
             return <Navigate to="/" />;
            //    if(response){
            //     return <Navigate to="/" />;
            //    }
              
            

         }
       
      }
      
    return(
    
        <div className='Container'>

            <div className='item'>
                <div className="left">
                    <div className="row1">
                        <img src='./images/GoogleLogo.png' alt="" height={25} width={70} />
                    </div>
                    <div className="text">Create your Google Account</div>

                    <div className="first-label">
                        <TextField
                            onChange={takeFirstname}
                            id="outlined-basic"
                            label="First name"
                            variant="outlined"
                            size="small"
                            error={regexObj.firstnameError}
                            helperText={regexObj.firstnameHelper}
                        />
                        <TextField
                            onChange={takeLastname}
                            id="outlined-basic"
                            label="Last name"
                            variant="outlined"
                            size="small"
                            error={regexObj.lastnameError}
                            helperText={regexObj.lastnameHelper}
                        />
                    </div>

                    <div className="second-label">
                        <TextField
                            onChange={takeUsername}                            
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                            size="small"
                            error={regexObj.emailError}
                            helperText={regexObj.emailHelper} 
                        />
                        
                      <div className="link1">
                         <Link href="#">Use my current email address instead</Link>
                      </div>
                    </div>

                    <div className="third-label">
                        <TextField
                            onChange={takePassword}
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            size="small"
                            error={regexObj.passwordError}
                            helperText={regexObj.passwordHelper}  />
                        <TextField
                            onChange={takePassword}
                            id="outlined-basic"
                            label="Confirm"
                            variant="outlined"
                            size="small"
                            error={regexObj.passwordError}
                            helperText={regexObj.passwordHelper}
                        />
                    </div>

                    <div className="fourth-label">
                        <FormControlLabel control={<Checkbox defaultChecked />}
                            label="Show password" />
                    </div>

                    <div className="left-end">
                        <div className='link2'>
                          <Link href="/">Sign in instead</Link>
                        </div>
                        
                        <div className='button'>
                            <Button variant="contained" onClick={signUp} href='/'>Next</Button>
                        </div>
                    </div>

                </div>

                <div className="right">
                    <img className="right-img" src='./images/google.jpg' alt='' />
                    <div className="right-text">
                        One account. All of Google
                       <br /> working for you.
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Signup;
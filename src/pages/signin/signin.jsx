import './signin.css';
import React from 'react';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { signIn } from '../../services/userservice';
// import { useNavigate } from "react-router-dom";
// eslint-disable-next-line 
import { Navigate,redirect } from "react-router-dom";
// eslint-disable-next-line
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

function SignIn(){

  const [signInObj,setSignInObj] = React.useState({
    email : "",
    password : ""
  });
  const [regexObj,setRegexObj] = React.useState({
    emailError : false,
    emailHelper : "",
    passwordError : false,
    passwordHelper : ""
  });
  const takeEmail = function(event) {
    setSignInObj((prevState)=>({...prevState,email : event.target.value}));
  }

  const takePassword = function(event) {
    setSignInObj((prevState)=>({...prevState,password : event.target.value}));
  }
  //const navigate = useNavigate();

  const submit = async()=>{
    let emailTest = emailRegex.test(signInObj.email);
    let passwordTest = passwordRegex.test(signInObj.password);

    console.log(emailTest,passwordTest);

    if(emailTest === false){
      setRegexObj((prevState)=>({
        ...prevState,
        emailError : true,
        emailHelper : "Please Enter Correct Email"
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
        passwordHelper : "Please Enter Correct Password",
      }));
    }
    else {
      setRegexObj((prevState)=>({
        ...prevState,
        passwordError : false,
        passwordHelper : ""
      }));
    }

    if(emailTest === true && passwordTest === true){
      let response = await signIn(signInObj);
      console.log(response);
      localStorage.setItem("token",response.data.data);
      
        
        return redirect("/dashboard");
      //  return <Navigate to="/dashboard" />;
        

      // if (response.data.code === 200) {
      //   navigate('/dashboard')
      // }
      // else {
      //   console.log('Enter Valid Login Details');
      // }
    }
  };
  function displaySignUp(){
    return redirect("/SignUp");
   // return <Navigate to="/SignUp" />;
  }
  return(
            <div className='Conatiner'>

            <div className='items'>
               <div className='img-item'><img src='./images/GoogleLogo.png' width={90} height={35} alt='' /></div>
               <div className='item-2'>Sign in</div>
               <div className='item-3'>Use Your Google Account</div>
               
               <div className='inputs'>
                   <div className='email'>
                      <TextField 
                        onChange={takeEmail}
                        fullWidth label="Email" 
                        id="fullWidth"  
                        size='small'
                        error={regexObj.emailError}
                        helperText={regexObj.emailHelper} 
                      />
                   </div>
                   <div className='password'>
                      <TextField
                        onChange={takePassword} 
                        fullWidth label="Password" 
                        id="fullWidth"  
                        size='small'
                        error={regexObj.passwordError}
                        helperText={regexObj.passwordHelper} 
                      />
                   </div>   
               </div>

               <div className='last'>
                  <div className='last-left'>
                    <Link href="/SignUp" onClick={displaySignUp}>Create account</Link>
                  </div>
                  <div className='last-right'>
                    
                    <Button variant="contained" onClick={submit} >SignIn</Button>
                  
                  </div>
               </div>
            </div>
        </div>        
    )
}

export default SignIn
import React from 'react'
import {useState} from "react"
import { Formik,useFormik,Form } from 'formik';
import { BrowserRouter as Router, Route, Link, Switch, Button, Redirect } from "react-router-dom";
import validation from '../validation/validation';


const SignUp = () => {
  const [toNext, setToNext] = useState(false);
  const {handleSubmit, handleChange, values, errors, touched, handleBlur} = useFormik({
      initialValues: {
        checkbox: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      },
      onSubmit: values => {
        setToNext(true);
        //{window.open('/dashboard')} //YENI SEKMEDE ACIYOR  //window.open da yeni sekmede aciyor
        console.log(values);
      },
      validationSchema: validation,
    });
  
    console.log(errors);
    
  
return (

<div className='signup_login'>
       <h1 className="user">Sign Up</h1>
       <br/>
    <div className='userImage'>
    <br/>
      <form onSubmit={handleSubmit}>
     <input name = "firstName" onChange = {handleChange} placeholder='First Name' values= {values.firstName} onBlur={handleBlur} />
     {errors.firstName && touched.firstName && (<div className='validation'>{errors.firstName}</div>)}
     <br/>
     <br/>

      <input name = "lastName" onChange = {handleChange} placeholder='Last Name' values= {values.lastName} onBlur={handleBlur} />
      {errors.lastName && touched.lastName && (<div className='validation'>{errors.lastName}</div>)}

      <br/>
      <br/>

      <input name = "email" onChange = {handleChange} placeholder='Valid e-mail' type='email' values= {values.email} onBlur={handleBlur} />
      {errors.email && touched.email && (<div className='validation'>{errors.email}</div>)}

      <br/>
      <br/>
      <input name = "password" onChange = {handleChange} type='password' placeholder='More than 5 letter' values= {values.password} onBlur={handleBlur} />
      {errors.password && touched.password && (<div className='validation'>{errors.password}</div>)}

      <br/>
      <br/>
      <input name = "passwordConfirmation" onChange = {handleChange} type='password' placeholder='Password Confirm' values= {values.passwordConfirmation} onBlur={handleBlur} />
      {errors.passwordConfirmation  && touched.passwordConfirmation && (<div className='validation'>{errors.passwordConfirmation }</div>)}

      <br/>
      <br/>
      <span className='term'>I read and agree to <a href = "#" className= 'cond'>Term and Condidition</a>  <input type = 'checkbox' checked name = "checkbox"  values= {values.checkbox} onChange = {handleChange} className = 'check'>
      </input></span>
      
      <br />
        <button type='submit' onClick= {handleSubmit} className='submit'>
        {toNext ? <Redirect to="/dashboard" /> : null} <p>Submit</p>
        </button>
      <br/>
      <br/>
      <p className = 'info'>
        If you have already account please <Link to = '/login'>
          LogIn
        </Link>
      </p>
      <br/>
    </form>
    </div>
   </div>
  )
}

export default SignUp;



{/*
     {<code>     
        {JSON.stringify(values)}
      </code> }
    
    */}
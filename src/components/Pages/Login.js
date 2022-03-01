import {useState} from 'react'
import { useFormik } from 'formik';
import validationLogIn from '../validation/validationLogIn';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom'

const Login = () => {
  const [toNext, setToNext] = useState(false);
    const {handleSubmit, handleChange, values, errors, touched, handleBlur} = useFormik({
        initialValues: {  
          email: '',
          password: '',
          passwordConfirmation: '',
        },
        onSubmit: values => {
          setToNext(true);
          //{window.open('/dashboard')} //YENI SEKMEDE ACIYOR  //window.open da yeni sekmede aciyor
          console.log(values);
        },
        validationSchema: validationLogIn,
      });
    
      console.log(errors);
    
  return (
     <div className='signup_login'>
         <h1 className='user'>Log In</h1>
       <br/>
       <br/>
     <div className='userImage'>
     <form onSubmit={handleSubmit}>
     <br/>
       <br/>
      <input name = "email" onChange = {handleChange} type='email' placeholder='Valid e-mail' values= {values.email} onBlur={handleBlur} />
      {errors.email && touched.email && (<div className='validation'>{errors.email}</div>)}
      <br/>
      <br/>
    
      <input name = "password" onChange = {handleChange} type='password' placeholder='More than 5 letter'  values= {values.password} onBlur={handleBlur} />
      {errors.password && touched.password && (<div className='validation'>{errors.password}</div>)}

      <br/>
      <br/>
      
      <input name = "passwordConfirmation" onChange = {handleChange} type='password' placeholder='Password Confirm' values= {values.passwordConfirmation} onBlur={handleBlur} />
      {errors.passwordConfirmation  && touched.passwordConfirmation && (<div className='validation'>{errors.passwordConfirmation }</div>)}

      <br/>
      <br/>
        <button type='submit' onClick={handleSubmit} onChange = {handleChange} className='submit'>
        {toNext ? <Redirect to="/dashboard" /> : null}Submit
        </button>
      <br/>
      <br/>
      <p className = 'info'>
        If you need to sign up please <Link to = '/'>
          Sign up
        </Link>
      </p>
      <p className='info'>
        <a href= "#">Forgot Password</a>
      </p>
    </form>
     </div>
     </div>
    )
}

export default Login
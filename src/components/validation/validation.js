import * as yup from 'yup';
  
const validation = yup.object({
  // checkbox: yup.string.required(), //bak
    firstName: yup.string().required('required field'),
    lastName: yup.string().required('required field'),
    email: yup.string().required('required field').email(),
    password:yup.string().min(5).max(10).required('required field'),
    passwordConfirmation:yup.string().oneOf([yup.ref('password')], "Passwords Have To Be Same").required('required field'), 
    //birthDate: yup.date().nullable().min(new Date(1900, 0, 1)),
  });
   
  export default validation;
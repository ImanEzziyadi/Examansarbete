import React from 'react'
import { useForm } from "react-hook-form";
import { Input, PasswordInput, Button} from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks';
import '../styles/registerform.css'
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
// import Navbar from '../components/navbar';


const RegisterForm = () => {
  const history = useHistory();
  // const router = useNavigate()
  const { register, handleSubmit } = useForm();
  const  defaultProps = { 
    username:"",
    email: "",
    password: ""
  }

  const [userDetails, setRegister] = useLocalStorage({key:'userDetails', defaultValue:defaultProps});
  // const goToLogin = ()=>{
  //   router("/login")
  // }
  


const onSubmit = (data) => {
  const array = []
  if (userDetails.length > 1) {
    userDetails.map((user) => {
      array.push(user)
      console.log("welcome in our project")
    })
    // alert('welcome to our project')
    swal('Welcome to Swedcon18!');
  } else {
    array.push(userDetails[0])
  }
  array.push(data)
  console.log(userDetails)
  setRegister(array)
  
} 
  


  return (
    <div id='registerForm'>
    
      <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='p-4'>Register Form</h1>
        <Input {...register("username", { required: true })} className='register-input'  placeholder="Username"/>
        <Input type="email" {...register("email", { required: true })}  className='register-email' placeholder="Email"/>
        <PasswordInput
          type="password"
          className='register-password'
          {...register('password')}
          placeholder='Enter your password..'
          required  
        />
      
      
      <div className='d-flex justify-content-between  algin-item-center'>
        <Button type="submit" > Register </Button>
        <Link to="/login">Login</Link>
        <Button type='button' onClick={() => history.goBack()}>Go Back</Button>
      </div>
    </form> 
    </div>
  )
}

export default RegisterForm
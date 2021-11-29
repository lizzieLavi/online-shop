import './sign_up.styles.scss'
import {React,useState} from 'react'

import FormInput from '../form_input/form_input.component'
import CustomButton from '../custom_button/custom_button.component'

import {auth,CreateUserProfileDocument} from '../../firebase/firebase.utils'

const SignUp =() =>
{
    const [displayName,setDisplayName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const handleSubmit = async (e) =>
    {
        e.preventDefault()

        if(password !== confirmPassword)
        {
          alert("passwords don't match")
          return;
        }

        try{

            const {user} = auth.createUserWithEmailAndPassword(email,password)
            await CreateUserProfileDocument(user,displayName)

            setDisplayName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')

        } catch(err){console.log(err)}

    }

    const handleChange = (e) =>
    {
        if(e.target.name === 'email')
         setEmail(e.target.value)
        else if(e.target.name === 'displayName')
            setDisplayName(e.target.value)
        else if(e.target.name === 'password')
            setPassword(e.target.value)
        else if(e.target.name === 'confirmPassword')
            setConfirmPassword(e.target.value)
    }



    return(
        <div className='sign_up'>
            <h2 className='sign_up_title'> I do not have an acount</h2>
            <span>Sign-up with your email and password</span>
            <form className='sign_up_form' onSubmit={handleSubmit}>
         
            <FormInput
                  name='displayName'
                  type='text'
                  value= {displayName}
                  onChange={handleChange}
                  label = 'display name'
                  required={true} />

                <FormInput
                  name='email'
                  type='email'
                  value= {email}
                  onChange={handleChange}
                  label = 'email'
                  required={true}/>  

                <FormInput
                  name='password'
                  type='password'
                  value= {password}
                  onChange={handleChange}
                  label= 'password'
                  required={true}/> 

                
                <FormInput
                  name='confirmPassword'
                  type='password'
                  value= {confirmPassword}
                  onChange={handleChange}
                  label= 'confirm password'
                  required={true}/> 

                <CustomButton type='submit' >SIGN UP</CustomButton>

            </form>

        </div>
    )


}

export default SignUp;
import './sign_in.styles.scss'
import {React,useState} from 'react'
import FormInput from '../form_input/form_input.component';
import CustomButton from '../custom_button/custom_button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () =>
{
  const [email,setEmail] = useState('');
  const [password,setPassword] =useState('');

  const handleSubmit =async (e) =>
  {
    e.preventDedault();

    try
    {
       await auth.signInWithEmailAndPassword(email,password)
       setEmail('')
       setPassword('')
       
    } catch(err){console.log(err)}
  }
  
  const handleChange = (e) =>
  {
      e.target.name === 'email'? setEmail(e.target.value) : setPassword(e.target.value)
  }

  return(
      <div className='sign_in'>
          <h2 className='title'> I already have an acount</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={handleSubmit}>
              <FormInput name='email' value={email} required={true} handleChange={handleChange} label='email'/>
              <FormInput name='password' type='password' value={password} required={true} handleChange={handleChange} label='password'/>

              <div className='sign_in_buttons'>
                <CustomButton  type='submit' value='submit form'> Sign In </CustomButton>
                <CustomButton  onClick={signInWithGoogle} isGoogleSignIn > Sign In With Google</CustomButton>
              </div>

          </form>
      </div>
  )

}

export default SignIn;
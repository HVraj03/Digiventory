import { app } from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword,
    GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

//Next imports
import { useRouter } from 'next/router'
import Image from 'next/image'
import Logo from '../public/logo.png'

//React Imports
import { useEffect, useState  } from 'react'

//Material UI Imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';





const Signup = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const router = useRouter();

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
 

    const handleSubmit = () => {
        console.log("Fomr Submitted")  
       
        createUserWithEmailAndPassword(auth, email, pass)
        .then((response) => {
            router.push('/dashboard')
            sessionStorage.setItem('Token', response.user.accessToken)
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode)
        })   
    }

    const signUpWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((response) => {
            console.log(response.user)
            sessionStorage.setItem('Token', response.user.accessToken)
            router.push('/dashboard')
        })
    }

    useEffect(() => {
        let token = sessionStorage.getItem('Token')

        if(token){
            router.push('/dashboard')
        }
    }, [router])

  return (
    <div className="mt-[150px] text-center h-screen w-1/2 lg:w-1/3 mx-auto">
      <div className='flex flex-row items-center justify-center text-teal-600'>
          <Image src={Logo} alt="logo"/>
          <p className='text-5xl ml-6'>Digiventory</p>
      </div>
      <form className='flex flex-col gap-10'>
        <TextField onChange={(e)=>{setEmail(e.target.value)}} id="outlined-basic"  label="Email" variant="outlined" type='email' />
        <TextField  onChange={(e)=>{setPass(e.target.value)}} id="outlined-basic" label="Password" variant="outlined" type='password' />
        <Button onClick={handleSubmit} style={{backgroundColor: '#1976d2',color: 'white'}} color="primary">Sign Up</Button>
        <h1>OR</h1>
        <Button onClick={signUpWithGoogle} color="primary">SignUp With Google</Button>
      </form>
    </div>
  );
};
export default Signup;

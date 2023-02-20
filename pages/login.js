import { app } from '../firebaseConfig';
import { getAuth, signInWithEmailAndPassword,
    GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

//Next imports
import { useRouter } from 'next/router'
import Image from 'next/image'
import Logo from '../public/logo.png'
import Link from 'next/link'

//React Imports
import { useEffect, useState  } from 'react'

//Material UI Imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';





const Login = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const router = useRouter();



    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
 

    const handleSubmit = () => {
        console.log("Fomr Submitted")  
        
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            sessionStorage.setItem('Token', userCredential.user.accessToken)
            router.push('/dashboard')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
            alert("Wrong Credentials Please Try again")
        })
    }

    const signIpWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((response) => {
            const credentials = GoogleAuthProvider.credentialFromResult(response);
            const token = credentials.accessToken;
            sessionStorage.setItem('Token', token)
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
          <Image src={Logo} alt="Logo"/>
          <p className='text-5xl ml-6'>Digiventory</p>
      </div>
      <form className='flex flex-col gap-10'>
        <TextField onChange={(e)=>{setEmail(e.target.value)}} id="outlined-basic"  label="Email" variant="outlined" type='email' />
        <TextField  onChange={(e)=>{setPass(e.target.value)}} id="outlined-basic" label="Password" variant="outlined" type='password' />
        <Button onClick={handleSubmit} variant="outlined" color="primary">Sign In</Button>
        <p className='mt-0 text-blue-600'>Not a member ? <Link className='ml-2 text-blue-800' href={'/signup'}>SignUp</Link> </p>
        <h1>OR</h1>
        <Button onClick={signIpWithGoogle} color="primary">SignIn With Google</Button>
      </form>
    </div>
  );
};
export default Login;

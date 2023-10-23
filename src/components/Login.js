import Header from "./Header"
import {useState,useRef} from "react"
import { checkValidData } from "../utiles/validate"
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utiles/fireBase";
import { useDispatch } from "react-redux";
import { addUser } from "../utiles/userSlice";
import { LOGIN_BG,URL_LOGIN } from "../utiles/constants";
 
const Login=()=>{
   
  const [errorMessage,setErrorMessage]=useState('');
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const dispatch=useDispatch();
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
      
      setIsSignInForm(!isSignInForm);
      
  }
  //const name=useRef(null);
  const handleButtonClick=()=>{

    //validate form data

    const message = checkValidData(  email.current.value,password.current.value );
    setErrorMessage(message);
      
    if(message) return;
    if(!isSignInForm)//signUp
    {
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value )
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: URL_LOGIN
            }).then(() => {
              // Profile updated! and store
              const {uid,email,displayName,photoURL}= auth.currentUser;//we need here updated value so useing auth.currentUser insted of useing the user
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                
            }).catch((error) => {
              setErrorMessage(error.message);
            });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage);
      });
    }
    else{//signIn 
          signInWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
             
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+" "+errorMessage);
            
          });
    }
}  
    return(
       <div>
            <Header/> 
            <div className="absolute">
            <img src={LOGIN_BG} alt="logo" />
            </div>
            <form onSubmit={(e)=>e.preventDefault()}className=" w-3/12 absolute bg-black p-12 mx-auto left-0 right-0 my-36 text-white bg-opacity-80 rounded-lg">
                <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
                {!isSignInForm&&<input ref={name} type="text" placeholder="Full name" className="p-3 my-2 w-full bg-gray-700 rounded-lg "/>}
                <input ref={email} type="text" placeholder="Email Address" className="p-3 my-2 w-full bg-gray-700 rounded-lg "/>
                <input ref={password} type="password" placeholder="Password" className="p-3 my-2 w-full rounded-lg bg-gray-700 "/>
                <p className="text-center text-red-600 font-bold text-lg py-2">{errorMessage}</p>
                <button className="p-3 my-6 bg-red-600 w-full rounded-lg hover:bg-red-800" onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
                <p className=" py-4 cursor-pointer"onClick={toggleSignInForm}>{isSignInForm?"New to Netflix ? Sign Up Now":"Already Registered ?Sign In Now"}</p>
            </form>
       </div>
    );
}
export default Login;
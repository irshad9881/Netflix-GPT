import Header from "./Header"
import {useState} from "react"
const Login=()=>{
const [isSignInForm,setIsSignInForm]=useState(true);
    const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
    }
    return(
       <div>
            <Header/> 
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="logo" />
            </div>
            <form className=" w-3/12 absolute bg-black p-12 mx-auto left-0 right-0 my-36 text-white bg-opacity-80 rounded-lg">
                <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
                {!isSignInForm&&<input type="text" placeholder="Full name" className="p-3 my-2 w-full bg-gray-700 rounded-lg "/>}
                <input type="text" placeholder="Email Address" className="p-3 my-2 w-full bg-gray-700 rounded-lg "/>
                <input type="password" placeholder="Password" className="p-3 my-2 w-full rounded-lg bg-gray-700  "/>
                <button className="p-3 my-6 bg-red-600 w-full rounded-lg">{isSignInForm?"Sign In":"Sign Up"}</button>
                <p className=" py-4 cursor-pointer"onClick={toggleSignInForm}>{isSignInForm?"New to Netflix ? Sign Up Now":"Already Registered ?Sign In Now"}</p>
            </form>
       </div>
    );
}
export default Login;
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utiles/fireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; 
import { useEffect } from "react";
import { addUser, removeUser } from "../utiles/userSlice";
import { LOGO } from "../utiles/constants";
const Header=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const user=useSelector((store)=> store.user);
        const handleSignOut=()=>{
                    signOut(auth).then(() => {
                    // Sign-out successful.
                  
            }).catch((error) => {
                    // An error happened.
                    navigate("/error");
            });
        }

    useEffect(()=>{
        const unscribed=onAuthStateChanged(auth, (user) => {
            if (user) {
                //signUp
              const {uid,email,displayName,photoURL}= user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
              //signIn
              navigate("/browse");
            } else {
               //signOut
               dispatch(removeUser());
               navigate("/");
            }
          });

          return ()=> unscribed();

       },[]);
    
    return (
        <div className="absolute w-screen bg-gradient-to-b from-white border-b-2 px-8 py-2 z-10 flex justify-between bg-white bg-opacity-30 h-20">
            <img className ="w-40" src={LOGO} alt="logo" />
             {user&& <div className="flex p-4 ">
                <img  className="w-10 h-10  p-1 cursor-pointer rounded-3xl" src={user?.photoURL} alt="userIcon" />
                 <button onClick={handleSignOut} className="p-1 underline cursor-pointer font-bold hover:text-blue-700" >signOut</button>
             </div>}
        </div>
    );
} 
export default Header;
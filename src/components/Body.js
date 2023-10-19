import Login from "./Login";
import Browse from "./Browse";
import {createBrowserRouter } from "react-router-dom";
import {RouterProvider} from "react-router-dom"
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth} from "../utiles/fireBase"
import { addUser, removeUser } from "../utiles/userSlice";
import {useDispatch} from "react-redux";

const Body=()=>{
    const dispatch=useDispatch();
     
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
         
    ]);

   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            //signUp
          const {uid,email,displayName,photoURL}= user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          //signIn
        } else {
           //signOut
           dispatch(removeUser());
        }
      });
   },[]);

    return (
        <div>
           <RouterProvider router={appRouter}/> 
        </div>
    );
}
export default Body;
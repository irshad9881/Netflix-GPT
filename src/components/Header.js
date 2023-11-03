import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utiles/fireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; 
import { useEffect } from "react";
import { addUser, removeUser } from "../utiles/userSlice";
import { LOGO, SUPPORTED_LAG } from "../utiles/constants";
import { setshowGptSearchPage } from "../utiles/gptSlice";
import { changeLanguage } from "../utiles/configSlice";
// import error from "../components/Error"
const Header=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const user=useSelector((store)=> store.user);
        const handleSignOut=()=>{
                    signOut(auth).then(() => {
                    // Sign-out successful.
                    navigate("/");
                  
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
       
     const handleGptSearchPageClick=()=>{
       dispatch(setshowGptSearchPage());
     }
     const handleLangChange=(e)=>{
      dispatch(changeLanguage(e.target.value));
     }
     const showGPtlang=useSelector(store=>store.gpt.showGptSearchPage);
    return (
        <div className="absolute w-full bg-gradient-to-b from-black border-b-2 px-8 py-2 z-10  flex flex-row  justify-between bg-gray-700 md:bg-gray-500 bg-opacity-30 h-12 md:h-20 ">
                    <img className =" -ml-4 md:-ml-0 w-20 md:w-40    md:mx-0" src={LOGO} alt="logo" />
                    {user&& <div className="flex p-1 md:p-2 my-0 md:my-0 ">
                    {showGPtlang&&<select onClick={handleLangChange} className= "w-[25%] h-6 md:h-10 bg-red-600  text-white p-0  mx-1   md:w-full md:mx-2 rounded-lg  ">
                                 {
                                  SUPPORTED_LAG.map(lang=><option key={lang.identifier} value={lang.identifier} className=" ">{lang.name}</option>)
                                 }
                                 </select>}
                    <button onClick={handleGptSearchPageClick} className=" h-6 md:h-10 hover:bg-red-500 py-1 md:py-2 px-1  md:px-2 mx-0 md:mx-2 my-0 md:m-auto text-center text-xs md:text-lg justify-center cursor-pointer bg-red-600 text-white rounded-lg">{showGPtlang?"HomgePage":"GPT Search"}</button>
                    <img  className="-mr-1 md:-mr-0 w-7 h-7 md:w-10 md:h-10  p-1 cursor-pointer rounded-3xl" src={user?.photoURL} alt="userIcon" />
                    <button onClick={handleSignOut} className="-mr-9 md:-mr-0 text-white text-xs md:text-lg p-1 underline cursor-pointer font-bold hover:text-red-500" >signOut</button>
             </div>}
        </div>
    );
} 
export default Header;
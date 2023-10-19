import { signOut } from "firebase/auth";
import { auth } from "../utiles/fireBase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; 
const Header=()=>{
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
    return (
        <div className="absolute w-screen bg-gradient-to-b from-white border-b-2 px-8 py-2 z-10 flex justify-between bg-white bg-opacity-25">
            <img className ="w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
             {user&& <div className="flex p-4 ">
                <img  className="w-10 h-10  p-1 cursor-pointer rounded-3xl" src={user?.photoURL} alt="userIcon" />
                 <button onClick={handleSignOut} className="p-1 underline cursor-pointer font-bold hover:text-blue-700" >signOut</button>
             </div>}
        </div>
    );
} 
export default Header;
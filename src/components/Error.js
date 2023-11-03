import { useRouteError } from "react-router-dom";
const Error=()=>{
    //const err=useRouteError();
    return (
        <div className="error text-red-600 justify-center m-auto w-6/12 text-center ">
            <h1>Oops!!</h1>
            <h2>Something Went Wrong !</h2>
        </div>
    );
}
export default Error;
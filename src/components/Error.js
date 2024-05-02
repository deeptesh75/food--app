import { useRouteError } from "react-router"; 
const Error=()=>{
    const err=useRouteError();
    return (
        <div>
            <h1>OOPS</h1>
            <h2>Something wents wrong!!</h2>
        </div>
    );
};
export default Error;
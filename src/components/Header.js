import { useState ,useContext} from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {useSelector } from "react-redux";
import UserContext from "./UserContext";
const Header=()=>{
    const [btnNameReact,setBtnNameReact]=useState("login");
    const OnlineStatus=useOnlineStatus();

    const {loggedInUser}=useContext(UserContext);
    //subscribing to the store using selector
    const cartItems=useSelector((store)=>store.cart.items)
    return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-4 p-4"> 
        <div className="logo-Container">
            <img className="w-40" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">Online Status:{OnlineStatus ? "✅ ": "🍎"}</li>
                <li className="px-4">
                    <Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About us</Link></li>
                <li className="px-4"><Link to="/contact">contact us</Link></li>
                <li className="px-4 font-bold text-xl"><Link to="/cart">Cart ({cartItems.length} items )</Link></li>
                <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
                <li className="px-4"><button className="login" onClick={
                    ()=>{
                        btnNameReact==="login" ? setBtnNameReact("logout") :setBtnNameReact("login");
                    }
                }>{btnNameReact}

                </button>
                </li>
                <li className="px-4 font-bold">{loggedInUser}</li>
                
             
            </ul>
        </div>

    </div>
    );
};
export default Header;
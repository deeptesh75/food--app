import { CDN_URL } from "../utils/constant";
import {  useContext } from "react";
import UserContext from "./UserContext";
const RestaurentCard=(props)=>{
    const {resData}=props;


    const  {name,cuisines,avgRating,costForTwo,sla,
        aggregatedDiscountInfoV3
        }=resData;

    console.log(resData);

    //using context
    const {loggedInUser}=useContext(UserContext);

    
    return (
        <div  data-testid="resCard" className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300" 
        /*style={{backgroundColor:"#f0f0f0"}}*/>
            <img className="res-logo rounded-lg" src={CDN_URL+resData.cloudinaryImageId}></img>
            <label className="absolute bg-black text-white pl-3 ml-3 rounded-lg">{aggregatedDiscountInfoV3?.header}{" "}{aggregatedDiscountInfoV3?.subHeader}</label>
            <h3 className="font-bold py-8 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating}*</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla.deliveryTime} minutes</h5>
            <p>{loggedInUser}</p>
        </div>
    );
};
export const withPromotedLabel=(RestaurentCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">One free delivery</label>
                <RestaurentCard {...props}/>

            </div>
        );
    };

};
export default RestaurentCard;
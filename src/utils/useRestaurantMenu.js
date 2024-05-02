import { useEffect,useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo] =useState(null);

    useEffect(()=>{
        fetchMenu();

    },[]);
    const fetchMenu= async()=>{
        const resp=await fetch(MENU_URL+resId);
        const json=await resp.json();
        console.log(json);
        setResInfo(json.data);

    };

    return resInfo;
};
export default useRestaurantMenu;
import  { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./components/UserContext";

//import Grocery from "./components/Grocery";
import React, {lazy,Suspense} from "react";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart"
//import Grocery from "./components/Grocery";
const Grocery=lazy(()=>import("./components/Grocery"));
const AppLayout=()=>{
  const [userName,setUserName]=useState();
  //authentication
  useEffect(()=>{
    //Make an api call and send userNAme and password
    const data={
      name:"Deeptesh Singh"
    }
    setUserName(data.name);

  },[])


    return (
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
      <Provider store={appStore}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </Provider>
        </UserContext.Provider>
    );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/Grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      },
      {
        path:"/restaurent/:resId",
        element:<RestaurentMenu/>,

      },
      { 
        path:"/cart",
        element:<Cart/>

      },
      
    ],
    errorElement:<Error/>
  },

]);

const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);

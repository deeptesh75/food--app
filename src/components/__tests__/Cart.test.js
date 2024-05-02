import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

//import { BrowserRouter } from "react-router-dom";
import RestaurentMenu from "../RestaurentMenu";
import MOCK_DATA from "../mocks/ResMenuData.json"

import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import "@testing-library/jest-dom";
import Cart from "../Cart";


//when we write jest.fn() it gives us mock function and this mock fn() takes a (dummy)callback fn and that call back fn return promise.resolve()
// and Promise.resolve returns a json(we convert that to a json) and this json returns promise.resolve() once again and this time
//we resolve MOCK_Data basically json is a function that returns
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);

        },
    })
});

it("Should load Restaurent Menu component",async ()=> {
    await act(async () => render( 
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        <RestaurentMenu/>
        <Cart/>
        </Provider>
        </BrowserRouter>));

    const accordinHeader=screen.getByText("Non Veg Pizza (12)");

    fireEvent.click(accordinHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(12);

    const addBtn=screen.getAllByRole("button",{name: "Add +" });
    fireEvent.click(addBtn[0]);
     fireEvent.click(addBtn[1]);


     expect(screen.getByText("Cart (2 items )")).toBeInTheDocument();




    

});
 

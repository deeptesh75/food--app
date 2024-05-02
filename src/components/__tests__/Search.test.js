import { fireEvent, render,screen } from "@testing-library/react";
import {act} from "react-dom/test-utils";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

import MOCK_DATA from "../mocks/mockResListData.json";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);

        },
    })
})

test("should Search resList of Burger text input",async ()=>{
    await act(async()=>render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>));

    const cardsBeforeSearch=screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(9);

    const searchBtn=screen.getByRole("button",{name:"Search"});

    const searchInput=screen.getByTestId("searchInput");
     
    fireEvent.change(searchInput,{target:{value:"burger"}});


    fireEvent.click(searchBtn);

    //screen should load 1 cards or no of cards for value:"burger" search time to time

    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(1);
});
it("should filter resList of topRatedRestaurent",async ()=>{
    await act(async()=>render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>));
    const cardsBeforeFilter=screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(9);

    const topRatedButton=screen.getByRole("button",{name:"Top Rated Restaurants"});

    fireEvent.click(topRatedButton);

    const cardsAfterFilter=screen.getAllByTestId("resCard");

    //console.log(cardsAfterFilter);

    expect(cardsAfterFilter.length).toBe(8);



        
})
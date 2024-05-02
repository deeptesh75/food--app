import { render,screen } from "@testing-library/react";
import RestaurentCard from "../RestaurentCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render RestaurentCard component with props Data",()=>{
    render(<RestaurentCard resData={MOCK_DATA}/>);

    const name=screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
});
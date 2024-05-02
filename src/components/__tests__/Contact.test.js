import { render ,screen} from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

describe("Contact Us Page Test Case",()=>{

test("Should load contact us component",()=>{
    render(<Contact/>);

    const heading=screen.getByRole('heading');

    //assertion

    expect(heading).toBeInTheDocument();

});
test("Should load butto inside contact us component",()=>{
    render(<Contact/>);

    const button=screen.getByText('Submit');

    //asertion

    expect(button).toBeInTheDocument();
});
it("should load input box",()=>{
    render(<Contact/>);

    const input=screen.getByPlaceholderText('name');


    expect(input).toBeInTheDocument();

});
test("Should load for two(2) input boxes",()=>{
    render(<Contact/>);

    const inputBoxes=screen.getAllByRole("textbox");

    //Assertion
     
    expect(inputBoxes.length).toBe(2);


});


});
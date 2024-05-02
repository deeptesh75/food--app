import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component{
    
   
    constructor(props){
        super(props);

    }
    render(){
    return (
        <div>
            <h1>About</h1>
            <h2>This is namaste react web series</h2>
            <div className="Aboutus">
                <UserClass name={"Deeptesh"} location={"pune"}/>
            </div>
        </div>
    );
};
};
export default About;
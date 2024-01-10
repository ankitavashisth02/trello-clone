import React from "react";
import ReactDOM from "react-dom/client";
import Header from './src/Header';
import BodyContainer from "./src/BodyContainer";

const HeaderComponent =()=>{
    return (
        <React.Fragment>
            <Header/>
            <BodyContainer/>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
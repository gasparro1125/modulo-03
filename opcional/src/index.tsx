import logoImg from "./content/logo_1.png";
import React from "react";
import ReactDOM from "react-dom";
import {AverageComponent} from "./averageComponent";
import {TotalSass } from "./totalScore";


const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgC").appendChild(img);

function escrb():void{
    console.log("hola munditooooooo");
}
escrb();

ReactDOM.render(
    <div>
        <TotalSass />
    </div>,
    document.getElementById("title")
);


ReactDOM.render(
    <div>
        <h1>Hello from react Dom</h1>
        <AverageComponent />
    </div>,
    document.getElementById("root")
);
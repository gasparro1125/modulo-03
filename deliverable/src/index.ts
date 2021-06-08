import "./index.scss";
import logoImg from "./content/logo_1.png";

const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgC").appendChild(img);

function escrb():void{
    console.log("hola munditooooooo");
}
escrb();
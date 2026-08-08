import "./index.css"
import {loadHome} from "./home.js";
import {loadMenu} from "./menu.js"


loadHome(); 

let homeBtn = document.querySelector("#homeBtn");
let menuBtn = document.querySelector("#menuBtn");
let aboutBtn = document.querySelector("#aboutBtn")
let container = document.querySelector("#container");

homeBtn.addEventListener("click" , ()=> {
    loadHome();
})

menuBtn.addEventListener("click" , ()=> {
    container.innerHTML = "";
    loadMenu();
})
import "./index.css"
import {loadHome} from "./home.js";
import {loadMenu} from "./menu.js";
import {loadAbout} from "./about.js";


loadHome(); 

let homeBtn = document.querySelector("#homeBtn");
let menuBtn = document.querySelector("#menuBtn");
let aboutBtn = document.querySelector("#aboutBtn")
let container = document.querySelector("#container");

homeBtn.addEventListener("click" , ()=> {
    container.innerHTML = "";
    loadHome();
})

menuBtn.addEventListener("click" , ()=> {
    container.innerHTML = "";
    loadMenu();
})

aboutBtn.addEventListener("click" , ()=> {
    container.innerHTML = "";
    loadAbout();
})
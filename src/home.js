import "./home.css"
import photo from "./collage.png"


export function loadHome (){
let container = document.querySelector("#container");

let headline = document.createElement("h1");
headline.classList.add("headline");
headline.textContent = "Authentic Italian Flavors. Unrivaled Coastal Views.";

let sub = document.createElement("h3");
sub.classList.add("sub");
sub.textContent = "Experience handcrafted pasta, fresh local seafood, and fine wine served over panoramic ocean horizons.";

let reserveBtn = document.createElement("button");
reserveBtn.classList.add("reserveBtn");
reserveBtn.textContent = "Make a reservation";

let exploreMenuBtn = document.createElement("button");
exploreMenuBtn.classList.add("exploreMenuBtn");
exploreMenuBtn.textContent = "Explore our menu";


let photoContainer = document.createElement("div");
photoContainer.classList.add("photoContainer");

let photoCollage = document.createElement("img");
photoCollage.classList.add("collage")
photoCollage.src = photo ;

photoContainer.append(photoCollage);

let leftSub = document.createElement("div");
leftSub.classList.add("leftSub");
leftSub.append(headline,sub, reserveBtn , exploreMenuBtn)
container.append(leftSub, photoContainer);
}
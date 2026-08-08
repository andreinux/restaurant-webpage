
import "./about.css"
export function loadAbout (){
    let container = document.querySelector("#container");

   

    // OUR STORY CARD

let storyCard = document.createElement("div");
storyCard.classList.add("card-about");

let storyHeading = document.createElement("h1");
storyHeading.classList.add("heading");
storyHeading.textContent = "Our Story";

let storySubheading = document.createElement("h1");
storySubheading.classList.add("subheading");
storySubheading.textContent = "Born by the sea, made with tradition.";

let storyParagraph = document.createElement("p");
storyParagraph.classList.add("paragraph");
storyParagraph.textContent = `Vista Mare is a coastal Italian restaurant built around the things we love most: good food, fresh ingredients, and time spent around the table.

Our menu takes inspiration from the different regions of Italy, from comforting handmade pasta to wood-fired pizza and fresh seafood. We keep our cooking simple, letting quality ingredients and traditional techniques do the work.

But Vista Mare is more than what's on the plate. It's the experience of sitting by the water with a glass of wine, sharing a pizza with friends, or enjoying a slow dinner as the sun sets over the coast.`;

let quote = document.createElement("h3");
quote.classList.add("quote");
quote.textContent = "Come for the food. Stay for the view.";

storyCard.append(storyHeading, storySubheading, storyParagraph, quote);


// VISIT US CARD

let visitCard = document.createElement("div");
visitCard.classList.add("card-about");

let visitHeading = document.createElement("h1");
visitHeading.classList.add("heading");
visitHeading.textContent = "Visit Us";

let restaurantName = document.createElement("h2");
restaurantName.classList.add("restaurantName");
restaurantName.textContent = "Vista Mare";

let address = document.createElement("p");
address.classList.add("address");
address.textContent = "Via della Marina 24, Positano, Amalfi Coast, Italy";

let hoursHeading = document.createElement("h2");
hoursHeading.classList.add("sectionHeading");
hoursHeading.textContent = "Opening Hours";

let hours = document.createElement("p");
hours.classList.add("hours");
hours.textContent = `Monday – Thursday: 11:30 AM – 10:00 PM
Friday – Saturday: 11:30 AM – 11:30 PM
Sunday: 12:00 PM – 10:00 PM`;

visitCard.append(
    visitHeading,
    restaurantName,
    address,
    hoursHeading,
    hours
);


// CONTACT US CARD

let contactCard = document.createElement("div");
contactCard.classList.add("card-about");

let contactHeading = document.createElement("h1");
contactHeading.classList.add("heading");
contactHeading.textContent = "Contact Us";

let phone = document.createElement("p");
phone.classList.add("contactInfo");
phone.textContent = "Phone: +39 081 555 0147";

let email = document.createElement("p");
email.classList.add("contactInfo");
email.textContent = "Email: vistamare@gmailcom";

let followHeading = document.createElement("h2");
followHeading.classList.add("sectionHeading");
followHeading.textContent = "Follow Along";

let instagram = document.createElement("p");
instagram.classList.add("contactInfo");
instagram.textContent = "Instagram: @vistamare.restaurant";

let facebook = document.createElement("p");
facebook.classList.add("contactInfo");
facebook.textContent = "Facebook: Vista Mare";

let reservationHeading = document.createElement("h2");
reservationHeading.classList.add("sectionHeading");
reservationHeading.textContent = "Reservations & Events";

let reservationText = document.createElement("p");
reservationText.classList.add("paragraph");
reservationText.textContent = "For table reservations, private dinners, or special events, get in touch with our team and we'll be happy to help.";

contactCard.append(
    contactHeading,
    phone,
    email,
    followHeading,
    instagram,
    facebook,
    reservationHeading,
    reservationText
);


// ADD CARDS TO CONTAINER

container.append(storyCard, visitCard, contactCard);
}
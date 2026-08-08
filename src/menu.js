
import "./menu.css"

//image imports
import Linguine from "./images/Linguine alle Vongole.jpg"
import Spaghetti from "./images/Spaghetti Frutti di Mare.jpg"
import Margherita from "./images/Pizza Margherita.jpg"
import Diavola from "./images/Pizza Diavola.jpg"
import Prosciutto from "./images/Prosciutto e Rucola.jpg"
import Branzino from "./images/Branzino alla Griglia.jpg"
import Salmone from "./images/Salmone al Limone.jpg";
import Pollo from "./images/Pollo alla Milanese.jpg"
import Filleto from "./images/Filetto di Manzo.jpg"
import Patate from "./images/Patate al Rosmarino.jpg"
import Verdue from "./images/Verdure Grigliate.jpg"
import Insalata from "./images/Insalata Mediterranea.jpg"
import Tiramisu from "./images/Tiramisù Classico.jpg"
import Panna from "./images/Panna Cotta.jpg"
import Cannoli from "./images/Cannoli Siciliani.jpg"
import Affogato from "./images/Affogato al Caffè.jpg"
import Limonta from "./images/Limonata della Casa.jpg"
import Aranciata from "./images/Aranciata.jpg"



export function loadMenu (){
    const container = document.querySelector("#container");

    menuItems.forEach((item)=> {
        let card = document.createElement("div");
        card.classList.add("card");

        let category = document.createElement("p");
        category.classList.add("category");
        category.textContent = item.category;

        let name = document.createElement("p");
        name.classList.add("name");
        name.textContent = item.name;

        let description = document.createElement("p");
        description.classList.add("description");
        description.textContent = item.description;

        let price = document.createElement("p");
        price.classList.add("price");
        price.textContent = `€ ${item.price.toFixed(2)}`;

        let img = document.createElement("img");
        img.classList.add("img");
        img.src = item.image;
        
        let cardLeft = document.createElement("div");
        cardLeft.classList.add("cardLeft");
        cardLeft.append(category, name, description, price)

        card.append(cardLeft,img);
        container.append(card);
    })
}

const menuItems = [
    // PASTA
    {
        category: "Pasta",
        name: "Linguine alle Vongole",
        description: "Linguine with clams, garlic, white wine, parsley, and chili",
        price: 18.50,
        image: Linguine
    },
    {
        category: "Pasta",
        name: "Spaghetti Frutti di Mare",
        description: "Spaghetti with shrimp, mussels, squid, cherry tomatoes, and garlic",
        price: 22.00,
        image: Spaghetti
    },

    // PIZZA
    {
        category: "Pizza",
        name: "Pizza Margherita",
        description: "San Marzano tomatoes, Fior di Latte mozzarella, fresh basil, and olive oil",
        price: 12.50,
        image: Margherita
    },
    {
        category: "Pizza",
        name: "Pizza Diavola",
        description: "Tomato, mozzarella, spicy salami, chili, and fresh basil",
        price: 15.00,
        image: Diavola
    },
    {
        category: "Pizza",
        name: "Prosciutto e Rucola",
        description: "Mozzarella, Italian prosciutto, fresh arugula, Parmigiano, and olive oil",
        price: 17.50,
        image: Prosciutto
    },

    // MAIN COURSES
    {
        category: "Main Courses",
        name: "Branzino alla Griglia",
        description: "Grilled sea bass with lemon, rosemary, and seasonal vegetables",
        price: 26.00,
        image: Branzino
    },
    {
        category: "Main Courses",
        name: "Salmone al Limone",
        description: "Pan-seared salmon with lemon butter, asparagus, and herbs",
        price: 24.00,
        image: Salmone
    },
    {
        category: "Main Courses",
        name: "Pollo alla Milanese",
        description: "Crispy breaded chicken breast with arugula, cherry tomatoes, and lemon",
        price: 20.00,
        image: Pollo
    },
    {
        category: "Main Courses",
        name: "Filetto di Manzo",
        description: "Grilled beef tenderloin with rosemary potatoes and red wine jus",
        price: 32.00,
        image: Filleto
    },

    // SIDES
    {
        category: "Sides",
        name: "Patate al Rosmarino",
        description: "Crispy roasted potatoes with rosemary and extra virgin olive oil",
        price: 6.50,
        image: Patate
    },
    {
        category: "Sides",
        name: "Verdure Grigliate",
        description: "Seasonal grilled vegetables with herbs and olive oil",
        price: 7.00,
        image: Verdue
    },
    {
        category: "Sides",
        name: "Insalata Mediterranea",
        description: "Mixed greens, tomatoes, cucumber, olives, and Italian dressing",
        price: 7.50,
        image: Insalata
    },

    // DESSERTS
    {
        category: "Desserts",
        name: "Tiramisù Classico",
        description: "Espresso-soaked ladyfingers, mascarpone cream, and cocoa",
        price: 8.50,
        image: Tiramisu
    },
    {
        category: "Desserts",
        name: "Panna Cotta",
        description: "Silky vanilla panna cotta with seasonal berries",
        price: 8.00,
        image: Panna
    },
    {
        category: "Desserts",
        name: "Cannoli Siciliani",
        description: "Crispy Sicilian pastry filled with sweet ricotta and pistachio",
        price: 7.50,
        image: Cannoli
    },
    {
        category: "Desserts",
        name: "Affogato al Caffè",
        description: "Vanilla gelato served with a shot of freshly brewed espresso",
        price: 6.50,
        image: Affogato
    },

    // DRINKS
    {
        category: "Drinks",
        name: "Limonata della Casa",
        description: "Freshly squeezed Italian lemon, sparkling water, and mint",
        price: 5.00,
        image: Limonta
    },
    {
        category: "Drinks",
        name: "Aranciata",
        description: "Traditional Italian sparkling orange soda",
        price: 4.50,
        image: Aranciata
    }
];
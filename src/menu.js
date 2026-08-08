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
        price.textContent = item.price;

        card.append(category, name, description, price);
        container.append(card);
    })
}


const menuItems = [
    // PASTA
    {
        category: "Pasta",
        name: "Linguine alle Vongole",
        description: "Linguine with clams, garlic, white wine, parsley, and chili",
        price: 18.50
    },
    {
        category: "Pasta",
        name: "Spaghetti Frutti di Mare",
        description: "Spaghetti with shrimp, mussels, squid, cherry tomatoes, and garlic",
        price: 22.00
    },

    // PIZZA
    {
        category: "Pizza",
        name: "Pizza Margherita",
        description: "San Marzano tomatoes, Fior di Latte mozzarella, fresh basil, and olive oil",
        price: 12.50
    },
    {
        category: "Pizza",
        name: "Pizza Diavola",
        description: "Tomato, mozzarella, spicy salami, chili, and fresh basil",
        price: 15.00
    },
    {
        category: "Pizza",
        name: "Prosciutto e Rucola",
        description: "Mozzarella, Italian prosciutto, fresh arugula, Parmigiano, and olive oil",
        price: 17.50
    },

    // MAIN COURSES
    {
        category: "Main Courses",
        name: "Branzino alla Griglia",
        description: "Grilled sea bass with lemon, rosemary, and seasonal vegetables",
        price: 26.00
    },
    {
        category: "Main Courses",
        name: "Salmone al Limone",
        description: "Pan-seared salmon with lemon butter, asparagus, and herbs",
        price: 24.00
    },
    {
        category: "Main Courses",
        name: "Pollo alla Milanese",
        description: "Crispy breaded chicken breast with arugula, cherry tomatoes, and lemon",
        price: 20.00
    },
    {
        category: "Main Courses",
        name: "Filetto di Manzo",
        description: "Grilled beef tenderloin with rosemary potatoes and red wine jus",
        price: 32.00
    },

    // SIDES
    {
        category: "Sides",
        name: "Patate al Rosmarino",
        description: "Crispy roasted potatoes with rosemary and extra virgin olive oil",
        price: 6.50
    },
    {
        category: "Sides",
        name: "Verdure Grigliate",
        description: "Seasonal grilled vegetables with herbs and olive oil",
        price: 7.00
    },
    {
        category: "Sides",
        name: "Insalata Mediterranea",
        description: "Mixed greens, tomatoes, cucumber, olives, and Italian dressing",
        price: 7.50
    },

    // DESSERTS
    {
        category: "Desserts",
        name: "Tiramisù Classico",
        description: "Espresso-soaked ladyfingers, mascarpone cream, and cocoa",
        price: 8.50
    },
    {
        category: "Desserts",
        name: "Panna Cotta",
        description: "Silky vanilla panna cotta with seasonal berries",
        price: 8.00
    },
    {
        category: "Desserts",
        name: "Cannoli Siciliani",
        description: "Crispy Sicilian pastry filled with sweet ricotta and pistachio",
        price: 7.50
    },
    {
        category: "Desserts",
        name: "Affogato al Caffè",
        description: "Vanilla gelato served with a shot of freshly brewed espresso",
        price: 6.50
    },

    // DRINKS
    {
        category: "Drinks",
        name: "Limonata della Casa",
        description: "Freshly squeezed Italian lemon, sparkling water, and mint",
        price: 5.00
    },
    {
        category: "Drinks",
        name: "Aranciata",
        description: "Traditional Italian sparkling orange soda",
        price: 4.50
    },
    {
        category: "Drinks",
        name: "Acqua Frizzante",
        description: "Chilled sparkling mineral water",
        price: 3.00
    }
];
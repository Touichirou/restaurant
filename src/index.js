import './style.css'
import './home.js'
import './menu.js'
import './contact.js'
import { headerFooter, homeDetails, initialLoad } from './home.js';
import { menuDetails } from './menu.js';
import { contactDetails } from './contact.js';


headerFooter();
initialLoad();

const homeTab = document.getElementById("home").addEventListener("click", homeDetails);
const menuTab = document.getElementById("menu").addEventListener("click", menuDetails);
const contactTab = document.getElementById("contact").addEventListener("click", contactDetails);



// const content = document.getElementById('content');

// const contentBody = document.createElement("div")
// contentBody.id = "contentbody"




// const header = document.createElement("header");
// header.id = "header";

// const homeTab = document.createElement("div");
// homeTab.id = "home";
// const homeTextNode = document.createTextNode("Home")
// homeTab.appendChild(homeTextNode)

// const menuTab = document.createElement("div");
// menuTab.id = "menu";
// const menuTextNode = document.createTextNode("Menu")
// menuTab.appendChild(menuTextNode)

// const contactTab = document.createElement("div");
// contactTab.id = "contact";
// const contactTextNode = document.createTextNode("Contact")
// contactTab.appendChild(contactTextNode)

// h1.appendChild(h1textNode);
// header.appendChild(homeTab);
// header.appendChild(menuTab);
// header.appendChild(contactTab);

// const h1 = document.createElement("h1");
// const h1textNode = document.createTextNode("Krispy Dream");


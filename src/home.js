import logo from './images/logo.png'

export function headerFooter() {
  const content = document.getElementById('content');
  const header = document.createElement("header");
  header.id = "header";
  const homeTab = document.createElement("div");
  homeTab.id = "home";
  const homeTextNode = document.createTextNode("Home")
  homeTab.appendChild(homeTextNode)
  const menuTab = document.createElement("div");
  menuTab.id = "menu";
  const menuTextNode = document.createTextNode("Menu")
  menuTab.appendChild(menuTextNode)
  const contactTab = document.createElement("div");
  contactTab.id = "contact";
  const contactTextNode = document.createTextNode("Contact")
  contactTab.appendChild(contactTextNode)
  const footer = document.createElement("footer");
  footer.id = "footer";
  const footerTextNode = document.createTextNode("This hideous website was created by Horatio Caine in order to practice using webpack.")
  footer.appendChild(footerTextNode)
  header.appendChild(homeTab);
  header.appendChild(menuTab);
  header.appendChild(contactTab);
  content.appendChild(header);
  content.appendChild(footer);
}

export function initialLoad() {
const h1 = document.createElement("h1");
  const h1textNode = document.createTextNode("Krispy Dream");
  const contentBodyHome = document.createElement("div")
  contentBodyHome.id = "contentbodyhome"
  contentBodyHome.className = "contentbody"
  
  const logoDonut = new Image();
  logoDonut.src = logo;
  logoDonut.id = "logo";
  
  const p = document.createElement("p");
  const ptextNode = document.createTextNode("Warm, fluffy, freshly-baked doughnuts.")
  p.append(ptextNode);
  
  h1.appendChild(h1textNode);
  
  content.appendChild(contentBodyHome);

  contentBodyHome.appendChild(h1);
  contentBodyHome.appendChild(logoDonut);
  contentBodyHome.appendChild(p);
}

export function homeDetails() {
  const contentBody = document.querySelector('.contentbody');
  contentBody.remove();
  initialLoad();
}
  
  
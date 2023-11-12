export function contactDetails() {
  const content = document.getElementById("content");
  const contentBody = document.querySelector('.contentbody');
  contentBody.remove();
  const contentBodyContact = document.createElement("div")
  contentBodyContact.id = "contentbodycontact"
  contentBodyContact.className = "contentbody"
  content.appendChild(contentBodyContact);
  const address = document.createElement("h2");
  const addressTextNode = document.createTextNode("13 Griffiths Place");
  address.appendChild(addressTextNode)
  const phone = document.createElement("h2");
  const phoneTextNode = document.createTextNode("012-345-6789");
  phone.appendChild(phoneTextNode)
  const hours = document.createElement("h2");
  const hoursTextNode = document.createTextNode("0700-2200 Mon-Sun");
  hours.appendChild(hoursTextNode)
  contentBodyContact.appendChild(address)
  contentBodyContact.appendChild(phone)
  contentBodyContact.appendChild(hours)
  }
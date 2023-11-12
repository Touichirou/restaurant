import orange from './images/orange.png'
import almond from './images/almond.png'
import glazed from './images/glazed.png'
import honeyglazed from './images/honeyglazed.png'
import iced from './images/iced.png'
import sprinkle from './images/sprinkle.png'
import strawberry from './images/strawberry.png'
import sugar from './images/sugar.png'

export function menuDetails() {
const content = document.getElementById("content");
    const contentBody = document.querySelector('.contentbody');
    contentBody.remove();


    const contentBodyMenu = document.createElement("div")
    contentBodyMenu.id = "contentbodymenu"
    contentBodyMenu.className = "contentbody"

    const cardOne = document.createElement('div');
    const cardTwo = document.createElement('div');
    const cardThree = document.createElement('div');
    const cardFour = document.createElement('div');
    const cardFive = document.createElement('div');
    const cardSix = document.createElement('div');
    const cardSeven = document.createElement('div');
    const cardEight = document.createElement('div');

    cardOne.className = "card";
    cardTwo.className = "card";
    cardThree.className = "card";
    cardFour.className = "card";
    cardFive.className = "card";
    cardSix.className = "card";
    cardSeven.className = "card";
    cardEight.className = "card";

    const cardOneTextNode = document.createTextNode("Caramel Dream")
    const cardTwoTextNode = document.createTextNode("Almond and White Chocolate")
    const cardThreeTextNode = document.createTextNode("Glazed")
    const cardFourTextNode = document.createTextNode("Honey Glazed")
    const cardFiveTextNode = document.createTextNode("Iced")
    const cardSixTextNode = document.createTextNode("Sprinkles")
    const cardSevenTextNode = document.createTextNode("Strawberry")
    const cardEightTextNode = document.createTextNode("Sugar")

    const orangeDonut = new Image();
    orangeDonut.src = orange;

    const almondDonut = new Image();
    almondDonut.src = almond;

    const glazedDonut = new Image();
    glazedDonut.src = glazed;

    const honeyglazedDonut = new Image();
    honeyglazedDonut.src = honeyglazed;

    const icedDonut = new Image();
    icedDonut.src = iced;

    const sprinkleDonut = new Image();
    sprinkleDonut.src = sprinkle;

    const strawberryDonut = new Image();
    strawberryDonut.src = strawberry;

    const sugarDonut = new Image();
    sugarDonut.src = sugar;

    cardOne.appendChild(cardOneTextNode);
    cardOne.appendChild(orangeDonut);
    cardTwo.appendChild(cardTwoTextNode);
    cardTwo.appendChild(almondDonut);
    cardThree.appendChild(cardThreeTextNode);
    cardThree.appendChild(glazedDonut);
    cardFour.appendChild(cardFourTextNode);
    cardFour.appendChild(honeyglazedDonut);
    cardFive.appendChild(cardFiveTextNode);
    cardFive.appendChild(icedDonut);
    cardSix.appendChild(cardSixTextNode);
    cardSix.appendChild(sprinkleDonut);
    cardSeven.appendChild(cardSevenTextNode);
    cardSeven.appendChild(strawberryDonut);
    cardEight.appendChild(cardEightTextNode);
    cardEight.appendChild(sugarDonut);

    contentBodyMenu.appendChild(cardOne);
    contentBodyMenu.appendChild(cardTwo);
    contentBodyMenu.appendChild(cardThree);
    contentBodyMenu.appendChild(cardFour);
    contentBodyMenu.appendChild(cardFive);
    contentBodyMenu.appendChild(cardSix);
    contentBodyMenu.appendChild(cardSeven);
    contentBodyMenu.appendChild(cardEight);

    content.appendChild(contentBodyMenu);
}





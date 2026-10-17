// Below is my object I cretaed to store drink data, and use to create drink cards later.

const espressoBasedDrinks = [{
  name: "Espresso",
  description: "A concentrated coffee beverage",
  ingredients: ["Finely ground coffee beans", "Hot water"],
  specs: "18g coffee | ~ 2oz",
  layers: [
    { name: "crema", color: "#BE5103", height: 15 },
    { name: "espresso", color: "#3F1B01", height: 65 }
  ]
},
{
  name: "Americano",
  description: "Espresso diluted in water",
  ingredients: ["Espresso", "water"],
  specs: "2oz espresso | ~ 6-10oz water",
  layers: [
    { name: "crema", color: "#BE5103", height: 10 },
    { name: "espresso", color: "#3F1B01", height: 30 },
    {name: "water", color: "light blue",height: 60}
  ]
},
{
  name: "Latte",
  description: "Espresso with steamed milk",
  ingredients: ["Espresso", "milk  (personal preference)"],
  specs: "2oz espresso | ~10oz steamed milk",
  layers: [
    { name: "crema", color: "#BE5103", height: 10 },
    { name: "espresso", color: "#3F1B01", height: 30 },
    {name: "milk", color: "white",height: 60}
  ]
},
{
  name: "Cappuccino",
  description: "Espresso with steamed milk and foam",
  ingredients: ["Espresso", "milk (personal preference)"],
  specs: "2oz espresso | ~4oz steamed milk |  ~2oz foam",
  layers: [
    { name: "crema", color: "#BE5103", height: 10 },
    { name: "espresso", color: "#3F1B01", height: 30 },
    {name: "milk", color: "white",height: 40},
    {name: "foam", color: "light brown",height: 20}
  ]
}
];

//Create a DOM Reference to my Menu container

const menu = document.querySelector(".menu");

//create for of loop to iterate through our object and create drink cards

function createDrinkCards(drinks){
for(let drink of drinks){

    const newDrinkArticle = document.createElement("article");
    newDrinkArticle.classList = "drink-card";

const glass = document.createElement("div");
glass.classList = "glass";

const layers = document.createElement("div");
layers.classList= "layers";


for(let layer of drink.layers){
    const layerDiv = document.createElement("div");
    layerDiv.classList = layer.name;

    layers.append(layerDiv);
}
glass.appendChild(layers);
newDrinkArticle.append(glass);
menu.append(newDrinkArticle);

//Creates the dividing line in the drink card to separate the visual from the text content
const divider = document.createElement("div");
divider.classList = "divider";

newDrinkArticle.append(divider);

//creates container for all text going into my drink card
const cardText = document.createElement("div");
cardText.classList = "card-text";

const drinkName = document.createElement("h2");
drinkName.classList= "drink-name";

drinkName.textContent = drink.name;

const description = document.createElement("p");

description.classList = "description";
description.textContent = drink.description;

const ingredients = document.createElement("p")

ingredients.classList= ("ingredients");

ingredients.textContent = drink.ingredients.join(", ");

const specs = document.createElement("p")

specs.classList= ("specs");

specs.textContent = drink.specs;

cardText.append(drinkName);
cardText.append(description);
cardText.append(ingredients);
cardText.append(specs);
newDrinkArticle.append(cardText);
}//end for of loop 


}//end function 

createDrinkCards(espressoBasedDrinks);
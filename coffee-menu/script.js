// Below is my object I cretaed to store drink data, and use to create drink cards later.

const espressoBasedDrinks = [{
  name: "Espresso",
  description: "A concentrated coffee beverage",
  ingredients: ["Finely ground coffee beans", "Hot water"],
  specs: "18g coffee ~ 2oz",
  layers: [
    { name: "crema", color: "#BE5103", height: 15 },
    { name: "espresso", color: "#3F1B01", height: 65 }
  ]
},
{
  name: "Americano",
  description: "Espresso diluted in water",
  ingredients: ["Espresso", "water"],
  specs: "2oz espresso | ~6-10oz water",
  layers: [
    { name: "crema", color: "#BE5103", height: 10 },
    { name: "espresso", color: "#3F1B01", height: 30 },
    {name: "water", color: "light blue",height: 60}
  ]
},
{
  name: "Latte",
  description: "Espresso with steamed milk",
  ingredients: ["Espresso", "milk (personal preference)"],
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
  specs: "2oz espresso | ~4oz steamed milk ~2oz foam",
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
}//end for of loop 
}//end function 
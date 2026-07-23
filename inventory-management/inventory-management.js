let inventory = [];

function findProductIndex(productName){

    let normalizedProductName = productName.toLowerCase();

for(let i = 0; i < inventory.length; i++){
        if(normalizedProductName === inventory[i].name){
            return i;
        }
    }

    return -1
    
}

function addProduct(productObject){
productObject = {
    name: productObject.name.toLowerCase(),
    quantity: productObject.quantity}

    let returnIndex = findProductIndex(productObject.name);

    if(returnIndex >= 0){
inventory[returnIndex].quantity += productObject.quantity
 console.log(`${productObject.name} quantity updated`);
    }else{
        inventory.push(productObject)
        console.log(`${productObject.name} added to inventory`);
    }
}

function removeProduct(product,qtyToSub){
    let normalizedProduct = product.toLowerCase();
    let returnIndex = findProductIndex(product);

    if(returnIndex === -1){
        console.log(`${normalizedProduct} not found`);
        return;
    }

    if(returnIndex >= 0){
        if(qtyToSub > inventory[returnIndex].quantity){
            console.log(`Not enough ${normalizedProduct} available, remaining pieces: ${inventory[returnIndex].quantity}`);


        } else if(inventory[returnIndex].quantity > qtyToSub){
            let newQty = inventory[returnIndex].quantity - qtyToSub;

            inventory[returnIndex].quantity = newQty;
            console.log(`Remaining ${normalizedProduct} pieces: ${newQty}`);


        }else if ((inventory[returnIndex].quantity - qtyToSub) === 0){
            inventory.splice(returnIndex,1);
        }
    }
}
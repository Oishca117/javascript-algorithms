function parseShipment(rawData) {

    let parseShipment = [];

    for (let entry of rawData) {
        let cleanEntry = entry.split("|")
        let cleanedData = {
            sku: cleanEntry[0],
            name: cleanEntry[1],
            qty: parseInt(cleanEntry[2]),
            expires: cleanEntry[3],
            zone: cleanEntry[4] || "general"
        }

        let skuExist = parseShipment.some((itemSku) => {
            if (cleanedData.sku === itemSku.sku)
                return true;
        })

        if (!skuExist) {
            parseShipment.push(cleanedData);
        }
    }//end for of loop 

    return parseShipment;
}//end parseShipment


function planRestock(pantry, shipment) {
    let actions = [];

    for (let item of shipment) {
        if (item.qty <= 0) {
            actions.push({ type: "discard", item: item })
        } else if (pantry.some(itemSku => itemSku.sku === item.sku)) {
            actions.push({ type: "restock", item: item })
        } else {
            actions.push({ type: "donate", item: item })
        }
    }
    return actions;
}

function groupByZone(actions) {
    let zones = {};

    for (let action of actions) {
        let key = action.item.zone

        if (!zones[key]) {
            zones[key] = [];
        }

        zones[key].push(action);
    }

    return zones;
}

function clonePantry(pantry) {
    let clonePantry = [];

    for (let item of pantry) {
        let cloneItem = {
            sku: item.sku,
            name: item.name,
            qty: item.qty,
            expires: item.expires,
            zone: item.zone
        }
        clonePantry.push(cloneItem);
    }
    return clonePantry;
}

function processShipment(rawData, pantry) {
    const shipment = parseShipment(rawData);

    const safePantry = clonePantry(pantry);

    const actions = planRestock(safePantry, shipment)

    const grouped = groupByZone(actions);

    console.log(grouped);
}

processShipment(rawData, pantry);
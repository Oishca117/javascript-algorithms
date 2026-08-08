const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&apos;"
}

function convertHTML(str) {
    let result = "";

    for (let current of str) {
        if (htmlEntities[current]) {
            result += htmlEntities[current];
        } else {
            result += current;
        }
    }
    return result;
}
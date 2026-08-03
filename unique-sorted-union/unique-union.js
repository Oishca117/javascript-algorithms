function uniteUnique() {
    let unique = [];
    for (let i = 0; i < arguments.length; i++) {
        for (let value of arguments[i]) {
            if (unique.includes(value)) {
                continue;
            }
            unique.push(value)
        }
    }
    return unique;
}
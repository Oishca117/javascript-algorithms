function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
        let currentCode = str[i].charCodeAt(0);
        let nextCode = str[i + 1].charCodeAt(0);

        if (nextCode !== currentCode + 1) {
            return String.fromCharCode(currentCode + 1);
        }
    }

    return undefined;
}
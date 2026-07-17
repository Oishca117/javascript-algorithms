function titleCase(str) {
    let titleCase = [];
    let words = str.split(" ");

    for (let word of words) {
        let firstPart = word[0];
        let secondPart = word.slice(1);

        let capChar = firstPart.toUpperCase();
        let rest = secondPart.toLowerCase();

        let newWord = capChar + rest;
        titleCase.push(newWord);
    }

    return titleCase.join(" ");
}
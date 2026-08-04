const dna = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
}

function pairElement(dnaInput) {
    let dnaPairs = [];
    for (let current of dnaInput) {
        let matching = dna[current];
        let paired = [current, matching];

        dnaPairs.push(paired);
    }
    return dnaPairs;
}
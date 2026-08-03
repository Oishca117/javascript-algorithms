function generatePassword(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];
    }

    return password;
}

let password = generatePassword(23);

console.log(`Generated password: ${password}`);
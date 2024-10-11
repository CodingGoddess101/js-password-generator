function password(length) {
    let password = "";
    let character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789()*&$#!";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * character.length);
        let randomChar = character[randomIndex]
        password += randomChar
    }
    console.log(password);
}
password(40)
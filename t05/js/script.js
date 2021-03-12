/* Guest List - Weak Set */
console.log("Guest List - Weak Set");
let guestList = new WeakSet();

let alex = {
    name: "Alexander",
    meetingDate: "01.01.1991"
}

let john = {
    name: "Johnattan",
    meetingDate: "01.01.1991"
}

let tom = {
    name: "Tomas",
    meetingDate: "01.01.1991"
}

guestList.add(alex);

console.log(`${alex.name} ${alex.meetingDate}`);

/* Menu - Map */
console.log("\nMenu - Map");
let menu = new Map([
    ["borsch", "40",],
    ["vareniki", "45"],
    ["horilka", "100"]
]);

for(let entry of menu) {
    console.log(entry);
}

menu.delete("borsch");
console.log("Borsch is deleted now!");

for(let entry of menu) {
    console.log(entry);
}

/* Bank Vault - Weak Map */
console.log("\nBank Vault - Weak Map");

let bankVault = new WeakMap();

let clown = {
    name: "Clown",
    credentials: {login: "lolkeklol", password: "1488322"},
    contents: "Circus clown"
};

let pog = {
    name: "Pog",
    credentials: {login: "PogChamper", password: "poooooooooogchamp"},
    contents: "The Legend"
};

let vasya = {
    name: "Vasya",
    credentials: {login: "Vasya82", password: "12345"},
    contents: "Rabotyaga"
};

bankVault.set(clown);
bankVault.set(pog);
bankVault.set(vasya);

console.log(clown);


/* Coin Collection - Set */
console.log("\nCoin Collection - Set");

let coinCollection = new Set();

let kopiika = {
    name: "kopiika",
    currency: "uah",
    material: "gold"
};

let cent = {
    name: "cent",
    currency: "dollar",
    material: "paper"
};

let euro_cent = {
    name: "euro-cent",
    currency: "euro",
    material: "platinum"
};

coinCollection.add(kopiika);
coinCollection.add(cent);
coinCollection.add(euro_cent);

coinCollection.forEach(coin => console.log(`${coin.name} ${coin.currency} ${coin.material}`));

coinCollection.clear();
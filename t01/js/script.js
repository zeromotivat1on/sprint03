String.prototype.removeDuplicates = function() {
    let arrString = this.split(' ');
    arrString = arrString.filter((value, index) => arrString.indexOf(value) === index); // delete duplicates
    for(let i = 0; i < arrString.length; ++i) { // remain only words
        if(arrString[i] == "") arrString.splice(i, 1);
    }

    let res = "";
    for(let i = 0; i < arrString.length; ++i) { // create string
        res += arrString[i];
        if(i < arrString.length - 1) res += " ";
    }
    return res;
}

/*
let str = "Giant Spiders?   What’s next? Giant Snakes?";
console.log(str); // Giant Spiders?   What’s next? Giant Snakes?
str = str.removeDuplicates();
console.log(str); // Giant Spiders? What’s next? Snakes?
str = str.removeDuplicates();
console.log(str); // Giant Spiders? What’s next? Snakes?
str = ". . . . ? . . . . . . . . . . .";
console.log(str); // . . . . ? . . . . . . . . . . .
str = str.removeDuplicates();
console.log(str); // . ?
*/
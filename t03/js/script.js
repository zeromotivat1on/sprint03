class Human {
    constructor(firstName, lastName, gender, age, calories){
        this.firstName = firstName;
        document.getElementById("firstName").innerHTML = firstName;
        this.lastName = lastName;
        document.getElementById("lastName").innerHTML = lastName;
        this.gender = gender;
        document.getElementById("gender").innerHTML = gender;
        this.age = age;
        document.getElementById("age").innerHTML = age;
        this.calories = calories;
        document.getElementById("calories").innerHTML = calories;
    }

    sleepFor(this.sleep_seconds) {
        console.log(this.sleep_seconds);
        if(this.sleep_seconds > 0) {
            console.log(`I'm sleeping | seconds left ${--this.sleep_seconds}`);
        } else {
            clearInterval(this.sleep_timer);
            console.log("I'm awake now");
        }
    }

    feed() {
        if(this.calories > 0 && this.calories < 500) {
            console.log("Nom nom nom");
            this.calories = +this.calories + 200;
            document.getElementById("calories").innerHTML = this.calories;
        }
        else {
            console.log("I'm not hungry");
        }
    }
}

class Superhero extends Human {
    constructor(firstName, lastName, gender, age, calories) {
        super(firstName, lastName, gender, age, calories);
    }

    fly() {
        console.log("I'm flying!");
    }

    fightWithEvil() {
        console.log("Khhhh-chh... Bang-g-g-g... Evil is defeated!");
    }
}


const human = new Human("Pog", "Champer", "male", 53, 100);
//const superhero = new Superhero;

document.querySelector(".Human .buttons .sleep").addEventListener("click", event => {
    var sleep_seconds = prompt("Enter number of seconds to sleep", "");
    var sleep_timer = setInterval(human.sleepFor(sleep_seconds), +sleep_seconds * 1000);
})

document.querySelector(".Human .buttons .feed").addEventListener("click", event => {
    var feed_timer = setInterval(human.feed(), 10000);
})

document.querySelector(".Superhero .buttons .fly").addEventListener("click", event => {
    var feed_timer = setInterval(superhero.fly(), 10000);
})

document.querySelector(".Superhero .buttons .fightWithEvil").addEventListener("click", event => {
    superhero.fightWithEvil();
})
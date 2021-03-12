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
        this.sleepTime = false;
        this.feedTime = false;
        setInterval(() => this.hungry(), 60000);
    }

    sleepFor(sleep_seconds) {
        if(!this.feedTime && !this.sleepTime){
            this.sleepTime = true;
            document.querySelector(".Main .display_info").innerHTML = "I'm sleeping";
            setTimeout(() => {
                document.querySelector(".Main .display_info").innerHTML = "I'm awake now";
                this.sleepTime = false;
                setTimeout(() => {
                    document.querySelector(".Main .display_info").innerHTML = "";
                }, 2000)
            }, sleep_seconds * 1000);
        }
    }

    feed() {
        if(!this.sleepTime && !this.feedTime){
            this.feedTime = true;
            this.calories = +this.calories + 200;
            document.getElementById("calories").innerHTML = this.calories;

            document.querySelector(".Main .display_info").innerHTML = "Nom nom nom";
            setTimeout(() => {
                document.querySelector(".Main .display_info").innerHTML = "";
                if(this.calories > 0 && this.calories < 500) {
                    document.querySelector(".Main .display_info").innerHTML = "I'm still hungry";
                    this.feedTime = false;
                } else {
                    document.querySelector(".Main .display_info").innerHTML = "I'm not hungry";
                    setTimeout(() => {
                        document.querySelector(".Main .display_info").innerHTML = "";
                        this.feedTime = false;
                    }, 2000)
                }
            }, 10000);
        }
    }

    hungry() {
        if(this.calories - 200 > 0) {
            this.calories = +this.calories - 200;
        }
        document.getElementById("calories").innerHTML = this.calories;
    }
}

class Superhero extends Human {
    constructor(firstName, lastName, gender, age, calories) {
        super(firstName, lastName, gender, age, calories);

        this.flyTime = false;
        this.fightTime = false;

        document.querySelector(".Main .no_image").classList.replace("no_image", "image");
        document.querySelector(".Main .image").classList.replace("image", "no_image");

        document.querySelector(".Main .buttons .no_button").classList.replace("no_button", "cringe");
        document.querySelector(".Main .buttons .no_button").classList.replace("no_button", "cringe");
    }

    fly() {
        if(!this.flyTime && !this.fightTime){
            this.flyTime = true;
            document.querySelector(".Main .display_info").innerHTML = "I'm flying!";
            setTimeout(() => {
                document.querySelector(".Main .display_info").innerHTML = "";
                this.flyTime = false;
            }, 10000)
        }
    }

    fightWithEvil() {
        if(!this.flyTime && !this.fightTime){
            this.fightTime = true;
            document.querySelector(".Main .display_info").innerHTML = "Khhhh-chh... Bang-g-g-g... Evil is defeated!";
            setTimeout(() => {
                document.querySelector(".Main .display_info").innerHTML = "";
                this.fightTime = false;
            }, 3000)
        }
    }
}

const human = new Human("Vasya", "Pupkin", "male", 53, 0);
var superhero;

document.querySelector(".Main .buttons .sleep").addEventListener("click", event => {
    human.sleepFor(prompt("Enter number of seconds to sleep"))
})

document.querySelector(".Main .buttons .feed").addEventListener("click", event => {
    human.feed();
})

document.querySelector(".Main .turn").addEventListener("click", event => {
    if(human.calories >= 500) {
        superhero = new Superhero("Pog", "Champer", "Helicopter", 34, human.calories);
    } else {
        document.querySelector(".Main .display_info").innerHTML = "Not enough calories!";
    }
})

document.querySelector(".Main .buttons .fly").addEventListener("click", event => {
    superhero.fly();
})

document.querySelector(".Main .buttons .fight").addEventListener("click", event => {
    superhero.fightWithEvil();
})
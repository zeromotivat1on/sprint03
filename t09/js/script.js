let validator = {
    get: function(target, property) {
        console.log(`Trying to access the property \'${property}\'...`);
        return property in target ? target[property] : false;
    },

    set: function(target, property, val) {
        if(property === "age") {
            if(typeof val !== "number") {
                console.log("Uncaught TypeError: The age is not an integer");
                return false;
            }
            if(+val < 0 || +val > 200) {
                console.log("Uncaught RangeError: The age is invalid");
                return false;
            }
        }

        console.log(`Setting value \'${val}\' to \'${property}\'`)
        return target[property] = val;
    }
}

/*
let person= new Proxy({}, validator);
person.age = 100; // Setting value '100' to 'age'
console.log(person.age);
// Trying to access the property 'age'...
// 100
person.gender = "male"; // Setting value 'male' to 'gender'
person.age = 'young'; // Uncaught TypeError: The age is not an integer
person.age = 300; // Uncaught RangeError: The age is invalid
*/
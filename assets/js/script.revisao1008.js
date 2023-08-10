/*let personSimple = "Felipe Miotto";

const personObject = new Object();
personObject.firstNme = "Felipe";
personObject.lastName = "Miotto";
personObject.age = "16";
personObject.eyeColor = "green";

console.log(personSimple);
console.log(personObject);*/

/*let personSimple = "Felipe Miotto";

const personObject = {
    firstNmae:"Felipe",
    lastName:"Miotto",
    age:16,
    eyeColor:"green"
};

personObject.age = 10;

console.log(personSimple);
console.log(personObject);*/

/*class User {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and my age is ${this.age}`);
    }
}

const user1 = new User(`Felipe`, 16);
user1.introduce();*/

class Pizza {
    constructor(base, sauce, toppings, cheese) {
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }

    getDescription() {
        return `A delicious pizza with ${this.base} base, ${this.sauce} sauce,
        ${this.toppings} toppings, and lots of cheese.`;
    }

    getTimer() {
        if (this.base == `traditional`) {
            return 10;
        } else if (this.base == `integral`) {
            return 15;
        } else {
            return `This base does not exist`
        }
    }

    timerSauce() {
        if (this.sauce == `tomato`) {
            return 5;
        } else if (this.sauce == `with sauce`) {
            return 7;
        } else {
            return `This Sauce not exist`
        }
    }

    timerToppings() {
        if (this.toppings == `pepperoni`) {
            return 4;
        } else if (this.toppings == `calabreso`) {
            return 10;
        } else {
            return `This Top not exist`
        }
    }

    timerCheese() {
        if (this.cheese == `cheedar`) {
            return 4;
        } else if (this.cheese == `mozzarela`) {
            return 2;
        } else {
            return `This cheese not exist`
        }
    }
}

const myPizza = new Pizza(`traditional`, `tomato`, `pepperoni`, `mozzarela`);
console.log(myPizza.getDescription());
console.log(`Time to cook the pizza` + myPizza.getTimer());
let timerPizza = myPizza.getTimer() + myPizza.timerSauce() + myPizza.timerToppings() + myPizza.timerCheese();
console.log(`Time to cook the pizza` + timerPizza);
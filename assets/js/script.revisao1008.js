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

/*class Pizza {
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
console.log(`Time to cook the pizza` + timerPizza);*/

/*class Calculator {
    add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }

    subtract(a, b) {
        return a - b;

    }
}
const calculator = new Calculator();

const sumResult = calculator.add(5, 3);
console.log("Sum", sumResult);

const multiplacationResult = calculator.multiply(4, 2);
console.log("Multiplication", multiplacationResult);

const subtractionResult = calculator.subtract(10, 4);
console.log("Subtraction", subtractionResult);*/

/*class Witch {
    constructor(name, patron, house, colorEyes) {
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.colorEyes = colorEyes;
    }

    getNmae() {
        return `O nome do(a) bruxo é ${this.name}`;
    }

    getHouse() {
        return `Ele(a) está na casa ${this.house}`;
    }

    getPatron() {
        return `Seu patrono é ${this.patron}`;
    }
}

class TypeWitch extends Witch {
    constructor(name, patron, house, colorEyes, typewitch) {
        super(name, patron, house, colorEyes,);
        this.typewitch = typewitch;
    }
    getTypeWitch() {
        if (this.typewitch === 'p') {
            return "Este bruxo é sangue puro"
        } else if (this.typewitch === 'M') {
            return "Este bruxo é mestiço"
        } else {
            return "Este é um trouxa"
        }
    }
}

const harry = new TypeWitch(`Harry Potter`, `Cervo`, `Grynffidor`, `Verde/Azul`, `M`);
console.log(harry.getTypeWitch());

const witch1 = new Witch(`Harry Potter`, `Dear`, `Grynffidor`, `green`);
console.log(witch1.getNmae());

class CamaraSecreta {
    constructor(name, pwd) {
        this.name = name;
        let _pwd = pwd; //atributo privado

        this.verifyPwd = (pwdInput) => {
            return pwdInput == _pwd;
        };

        this.acessToChamber = () => {
            let pwdInput = prompt("digite a senha");
            if (this.verifyPwd(pwdInput)) {
                console.log(`Bem vindo ${this.name}`)
            } else {
                console.log("Acesso negado!");
            }
        }

    }

    showName(){
        console.log(`Nome do bruxo ${this.name}`)
    }
}

const myAccess1 = new CamaraSecreta(`Harry Potter`, `senha123`);
myAccess1.showName();
myAccess1.name = `HP`;
myAccess1.pwd = `123`;
myAccess1.acessToChamber();*/


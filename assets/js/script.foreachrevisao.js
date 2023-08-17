/*const companies = ["Apple", "Google", "Facebook"];

companies.forEach(companies => {
    console.log(`Hey, ${companies}!`)
});*/

/*const names = ["Felipe", "Miotto", "de", "Oliveira"];

names.forEach((names) =>{
console.log(`HI ${names}!`)
})*/

/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

console.log(numbers);

numbers.forEach((number, index) => {
    if(number % 2 == 0){
        console.log(number)
    }
})*/

/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

console.log(numbers);

numbers.forEach((number, index) => {
    if(number % 2 == 0){
        console.log(`O numero ${number} está na posição ${index}`)
    }
})*/

/*const cars = [
    {
        marca: "Ford",
        modelo: "Focus"
    },

    {
        marca: "BMW",
        modelo: "BMW Z4"
    },

    {
        marca: "Fiat",
        modelo: "Palio"
    },

    {
        marca: "Audi",
        modelo: "A3"
    }
]

cars.forEach((car) => {
    console.log(`Marca: ${car.marca} - Modelo: ${car.modelo}`)
}
)*/

class Cars {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}

class CarsList {
    constructor(){
        this.cars = [];
    }

    addCar(car){
        this.cars.push(car);
    }
}
const listadeCarros = new CarsList();

function addCarfunction(){
    let modelo = document.getElementById("modelo").value;
    let marca = document.getElementById("marca").value;
    const meuCarro = new Cars(marca, modelo);
    listadeCarros.addCar(meuCarro);
    console.log(listadeCarros);
}
// var person = "Dude"
// let food = "Donut"
// const fred = "Fred"

// function add2 (){

// }

// Data types 
// Numbers
// Boolean
// String
// Symbol
// Null

// Arrays
// Object 

let num = 10

const add2 = (num1, num2) => {
    return num1 + num2
}

// console.log(add2(190, num))

// let arr = [10, "fred", {}]
// console.log(arr[0])

let tom = {
    fname: "Tom",
    age: 20,
    sayHello: () => {
        console.log("Hello")
    }
}

let weather = "rain"

// weather == "rain" ? console.log("Bring a rain coat!") : console.log("Wear a T shirt!")

// if(weather == "rain") {
//     console.log("Bring a rain coat!") 
// }
// else if(weather == "sunny"){
//     console.log("Its sunny")
// }
// else {
//     console.log("Wear a T shirt!")
// }

// Destructure
let movies = {
    horror: "Event horrizon",
    comedy: "Waterboy",
    sciFi: "Alien"
}

const {horror, comedy, sciFi} = movies

// console.log(horror)

// Spread operator
const copyMovies = {...movies, romCom: "Austen Land"}

// console.log(copyMovies)
// console.log(movies)

// for(let i = 0; i < 10; i++){
//     console.log("HEllO")
// }
// let i = 0
// while( i < 10){
//     console.log("HI")
// }
let arr = [10, "fred", 20, 30]

for(let key in movies){
    console.log(movies[key])
}
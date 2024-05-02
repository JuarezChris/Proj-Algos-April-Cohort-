// let person = "Tom"
const fred = "Fred"

function add2() {
    let tom = "Tom"
}

const add3 = () => {

}

() => {

}

let arr = [20, {}, [], "HeLlo"]

// arr.push(10)
// arr.pop()
// arr.splice(1, 2)
arr[3] = arr[3].toLowerCase()
// console.log(arr)

let movie = "Road House"


// console.log(movie[5])

let movies = ["Road House", "Scream", "Back to the future", "Home Alone"]

// let newMovies = movies.map(movie => movie + 10)

let add10 = (val) => {
    return val + 10
}

const newMap = (arr, func) => {
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(func(arr[i]))
    }
    return newArr
}

// console.log(newMap(movies, add10))

// let filteredMovies = movies.filter(movie => movie != "Back to the future")



// console.log(filteredMovies)

// let movies = ["Road House", "Scream", "Back to the future", "Home Alone"]

let tom = {
    fname: "Tom",
    age: 100,
    hobbies: ["Run", "paint", "Soccer"]
}

const {fname, age, hobbies} = tom

// console.log(fname)
// console.log(age)
// console.log(hobbies[0])

// let tom2 = tom
// tom2["email"] = "t@t.com"

const tom2 = {...tom, email: "tom@tom.com"}

console.log(tom)
console.log(tom2)


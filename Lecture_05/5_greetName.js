function greet (name) {
   return ("Hello " + `${name}` + "!")
}

console.log(greet("Bob"))

function greet2 (name) {
    return ("How are you " + `${name}` + "?")

}

console.log(greet2("John"))

function bye () {
    return ("Getting ready to say bye...")
}

console.log (bye())

function meeting (name) {
    console.log('****************************')
    console.log(greet(name))
    console.log(greet2(name))
    console.log(bye())
    return "Ok bye!"
}

console.log(meeting("Mark"))
// STEP 1: Create a new repo in GitHub called Assignment01.
// STEP 2: Open the new repo / folder on your computer and proceed through the process of connecting Visual Studio Code to your remote repo.
// STEP 3: Create a new HTML5 document and save it as index.html.
function nullUndefinedVariable() {
    let nullVariable = null
    let undefinedVariable
    console.log(nullVariable, undefinedVariable)
}
function prt_1() {
    let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
    console.log(someString)
}

function prt_2() {
    let myVariable
    myVariable = 25 + "It will be a string"
    console.log(myVariable)
    console.log(typeof myVariable)
}

function prt_3() {
    let x = 5
    console.log(typeof x++)
}

function prt_4() {
    let y = true + "string"
    let x = 10 + false
    console.log(typeof y)
    console.log(typeof x)
}

//let name = "I\'m Thanh"
//console.log(typeof name)

function alf() {
    let hisName = "Zak Ruvalcaba"
    let myName = "Thanh Bac"
    let gr = "Hello"
    let course = "JavaScript"
    let welcome = ", welcome to the "
    let cl = " class!"

    window.alert(gr + ' ' + hisName + " and " + myName + welcome + course + cl)

}

function alf_2() {
    let hisName = "Zak Ruvalcaba"
    let gr = "Hello"
    let course = "JavaScript"
    let welcome = "Welcome to the "
    let cl = " class!"

    window.alert(gr + ' ' + hisName + ".\n" + welcome + course + cl)
    
}

function alf_3() {
    let theirName = prompt("Enter your name: ")
    let gr = "Hello"
    let course = "JavaScript"
    let welcome = "Welcome to the "
    let cl = " class!"

    window.alert(gr + ' ' + theirName + ".\n" + welcome + course + cl)
    
}

function alf_4() {
    let myName = "Thanh Bac"
    let gr = "Hello"
    let course = prompt("Enter you class: ")
    let welcome = "Welcome to the "
    let cl = " class!"

    window.alert(gr + ' ' + myName + ".\n" + welcome + course + cl)
    
}

function sumxy() {
    let x = 10
    let y = 20
    console.log("x + y = ", x + y)
}

function xadd() {
    let x = 20
    x += 20
    console.log(x)
}

function xmultip() {
    let x = 20
    x *= 5
    console.log(x)
}

function xremainder() {
    let x = 20
    x %= 3
    console.log(x++)
}

function coparisonTrue() {
    let x = 10
    let y = 20
    let z = 15
    console.log(x < y && y > z)
}

function coparisonFalse() {
    let x = 10
    let y = 20
    let z = 15
    console.log(x < y && y < z)
}
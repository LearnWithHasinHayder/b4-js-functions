
function square(x){
    // const squaredValue = x * x;
    // return squaredValue;
    return x * x;
}

function sayHello(name, greetings = "Hello"){
    console.log(greetings + " " + name);
    console.log( `${greetings} ${name}`); //string literal
}

sayHello("John", "Good Morning");

// 2. Override console.log  method and always append Hello  to the log message. For ex., console.log('Koushik') return 'Hello Koushik' !

function addingString() {
    let string = "Hello";
    return string;
}

var temp = console.log;
// temp.apply(console.log, message);

console.log = function () {
    let message = [];

    message.push(addingString() + " " + message.shift.call(arguments));
    
    temp.apply(console.log, message);
}

console.log("Koushik");
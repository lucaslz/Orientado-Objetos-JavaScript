function notDefined( message) {
    this.message = message || 'Function not defined';
    Error. call(this, message);
};

notDefined.prototype = new Error();

// var hello = function() {
//     console.log("Hello");
// }

try {
    bello();
} catch (e) {
    throw new notDefined();
} finally {
    console.log("Finally block");
}

//Finally pode ser usado para liberar algum tipo de recurso

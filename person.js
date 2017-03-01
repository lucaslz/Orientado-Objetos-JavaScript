function Person() {
    this.nome = ' ';
    this.age = ' ';
    this.eyesColor = ' ';
    this.body = ' ';

    this.move = function () {

    }

    this.say = function() {
        console.log("Hello from say action");
    }

    this.see = function () {

    }
}

var lucas = new Person();

console.log(typeof Person); //funcao
console.log(typeof lucas); //objeto

// Accessando atributos
lucas.nome = "Lucas";
lucas.age = "20";
lucas.eyesColor = "preto";
lucas.body = "gordo";

console.log(lucas);
lucas.say();

var wesley = new Person();
// Accessando atributos
wesley.nome = "wesley";
wesley.age = "25";
wesley.eyesColor = "Blue";
wesley.body = "Magro";

console.log(wesley);

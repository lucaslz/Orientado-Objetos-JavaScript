//Classe abstrata
var Animal = function() {
    throw "this is an abstract class";
};

Animal.prototype.name = '';
Animal.prototype.sound = '';
Animal.prototype.say = function() {
    return console.log(this.name + "Exit => " +this. sound);
};

var Cat = function() {
    this.name = 'Cat';
    this.sound = 'meow';
};

var Dog = function() {
    this.name = 'Dog';
    this.sound = 'woof';
}

//Estendendo a classe animal para as classes abaixo
Cat.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

console.log(new Cat().say);
console.log(new Dog().say);

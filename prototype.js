var Animal = function() {
};

Animal.prototype.name = '';
Animal.prototype.type = '';

Animal.prototype.move = function(){
    console.log("I'm moving!");
};
Animal.prototype.say = function(){};

var cat = new Animal ();

cat.move();

console.log(new Animal());

function Address() {
    var number = 0;
    var city = '';
    var address = '';
}
Address.prototype.getNumber = function() {
    return number;
};

Address.prototype.setNumber = function(_number) {
    number = _number;
};
Address.prototype.getCity = function() {
    return city;
};

Address.prototype.setCity = function(_city) {
    city = _city;
};
Address.prototype.getAddress = function() {
    return address;
};

Address.prototype.setAddress= function(_address) {
    address = _address;
};

function Person() {
    var name = '';
    var age = 0;
}

Person.prototype = new Address();
Person.prototype.constructor = Person;

Person.prototype.getName = function() {
    return name;
};

Person.prototype.setName = function(_name) {
    name = _name
};

Person.prototype.getAge = function() {
    return age;
};

Person.prototype.setAge = function(_age) {
    age = _age;
};

var lucas = new Person();
lucas.setName("Lucas");
lucas.setAge(28);
lucas.setCity("Alvinópolis")
console.log(lucas.getName(), lucas.getAge(),  lucas.getCity());
console.log(lucas);
console.log(lucas instanceof Address);

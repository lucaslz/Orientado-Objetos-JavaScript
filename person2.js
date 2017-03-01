function Person () {
    var name = ' ';
    var age = 0;

    this.getName = function() {
        return name;
    }

    this.setName = function(_name) {
        name = _name;
    }

    this.getAge = function() {
        return age;
    }

    this.setAge = function(_age) {
        age = _age;
    }
}

var lucas = new Person();
lucas.setName("Lucas");
lucas.setAge(23);
console.log(lucas.getAge());
console.log(lucas.getName());
console.log(lucas);

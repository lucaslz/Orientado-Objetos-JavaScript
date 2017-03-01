function Pen() {
    this.color = '';

    this.getColor = function() {
        return this.color;
    };

    this.setColor = function(_color) {
        this.color = _color;
    };
}

Pen.manufacturer = 'Bic';

Pen.setManifecturer = function(_manifacturere) {
    this.manufacturer = _manifacturere;
};

Pen.getManifecturer = function() {
    return this.manufacturer;
};

Pen.setManifecturer('Bic');
console.log(Pen.getManifecturer());


var pen = new Pen();

console.log(pen.getManifecturer());

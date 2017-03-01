var value = {
    val: 10,
    getValue: function() {
        return this.val  + 2;
    }
};

console.log(value.getValue());

var value2 = Object.create(value);

value2.getValue = function(_val) {
    return this.val  + 10 + _val;
};

console.log(value2.getValue(10));

console.log(value, value2);

"use strict";
console.clear();
console.log("Un paso adelante");
/* tsc */
/* node index.js */
/* funciones con variables obligatorias */
function add(x, y) {
    return x + y;
}
/* funciones con variables opcionales */
function resta(x, y) {
    if (y) {
        return x - y;
    }
    return x;
}
/* funciones anonimas */
var mifuncion = function (x, y) {
    return x * y;
};
var vector = /** @class */ (function () {
    function vector(nombrev) {
        if (!nombrev) {
            this.nombre = "v";
        }
        else {
            this.nombre = nombrev;
        }
    }
    vector.prototype.getNombre = function () {
        return this.nombre;
    };
    return vector;
}());
var a1;
var a2;
var b;
a1 = 0x00001;
a2 = 2;
a1 += 1;
b = resta(a1);
console.log(b);
var vector1 = new vector("A");
console.log(vector1.getNombre());
var vector2 = new vector();
console.log(vector2.getNombre());

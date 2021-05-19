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
var dividir = function (x, y) { return y / x; };
var vector = /** @class */ (function () {
    function vector(ix, iy, nombrev) {
        if (!nombrev) {
            this.nombre = "v";
        }
        else {
            this.nombre = nombrev;
        }
        this.ix = ix;
        this.iy = iy;
        this.magnitud = Math.sqrt((ix * ix) + (iy * iy));
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
var vector1 = new vector(2, 2, "A");
console.log(vector1.getNombre());
console.log("Magnitud del vector " + vector1.magnitud);
var vector2 = new vector(2, 3);
console.log(vector2.getNombre());
console.log("Magnitud del vector " + vector2.magnitud);

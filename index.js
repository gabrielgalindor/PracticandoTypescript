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
var a1;
var a2;
var b;
a1 = 0x00001;
a2 = 2;
a1 += 1;
b = resta(a1);
console.log(b);

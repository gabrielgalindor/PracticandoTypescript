console.clear();
console.log("Un paso adelante");


/* tsc */
/* node index.js */

/* funciones con variables obligatorias */
function add(x: number, y: number): number{
    return x + y;
}
/* funciones con variables opcionales */
function resta(x:number,y?:number):number{
    if(y)
    {
        return x-y;
    }
    return x;
}
/* funciones anonimas */
let mifuncion = function(x:number,y:number):number{
    return x*y;
}

class vector{
    private nombre:string;
    constructor(nombrev?:string){
        if(!nombrev)
        {
            this.nombre="v";
        }else{
            this.nombre=nombrev;
        }
    }
    getNombre(){
        return this.nombre;
    }
}


var a1:number;
var a2:number;

var b: number;
a1=0x00001;
a2=2;
a1+=1;

b=resta(a1);
console.log(b)

let vector1 = new vector("A");
console.log(vector1.getNombre());

let vector2 = new vector();
console.log(vector2.getNombre());

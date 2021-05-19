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

let dividir = (x:number,y:number) => y/x;

class vector{
    private nombre:string;
    public magnitud:number;
    private ix:number;
    private iy:number;
    private ox:number;
    private oy:number;

    constructor( ix:number, iy:number, nombrev?:string){
        if(!nombrev)
        {
            this.nombre="v";
        }else{
            this.nombre=nombrev;
        }
        this.ix=ix;
        this.iy=iy;
        this.magnitud=Math.sqrt((ix*ix)+(iy*iy));
        this.ox=0;
        this.oy=0;
    }
    getNombre(){
        return this.nombre;
    }
    setOriginX(valor:number){
        this.ox=valor;
    }
    setOriginY(valor:number){
        this.oy=valor;
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

let vector1 = new vector(2,2,"A");
console.log(vector1.getNombre());
console.log("Magnitud del vector "+vector1.magnitud)

let vector2 = new vector(2,3);
console.log(vector2.getNombre());
console.log("Magnitud del vector "+vector2.magnitud)

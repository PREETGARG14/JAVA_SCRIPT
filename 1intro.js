console.log("hello pepcoding");//print
// semicolon is not imp to write
let a=null; //declare a variable 
console.log(a);
//Variable types : PRIMITIVE -> boolean,null,String,number,symbol;

a=10;
a=10.1;
a="string";

let no=10;
let count=0;

for(let i=2;i<=no;i++)
{let count=0;

 for(let j=2;j*j<=i;j++){
    if(i%j==0)
        {count++
        break;}
        }
        if(count==0)
         console.log(i);
    }

// if we divide 2 no and we want integer value then we have 4 methods
//method 1->The Math.trunc() method simply truncates the decimal part of the number and returns the integer part.

// op =11
Math.trunc(11.25)

//op = 11
Math.trunc(11.99)

//op = -11
Math.trunc(-11.25)

//op = 11
Math.trunc(11)

//method 2 ->The Math.round() method rounds the number to the nearest integer.

//op = 11
Math.round(11.25)

//op = 12
Math.round(11.99)

//op = -11
Math.round(-11.25)

//op=  12
Math.round(11.5)

//op= -11
// round to the next greater integer
Math.round(-11.5)

//op= 11
Math.round(11)

//method 3 -> Math.ceil() rounds the number upwards to the next integer (having greater value). Going by the name it returns the "ceiling" integer of a number.

//op= 12
Math.ceil(11.25)

//op= 12
Math.ceil(11.99)

//op= -11
// -11 has greater value than -11.25
Math.ceil(-11.25)

//op= 11
Math.ceil(11)

//method 4 -> The Math.floor() method rounds the number downwards to the next integer (having lower value). Going by the name it returns the "floor" integer of a number.

//op= 11
Math.floor(11.25)

//op= 11
Math.floor(11.99)

//op= -12
// -12 has lower value than -11.25
Math.floor(-11.25)

//op= 11
Math.floor(11)

/*IN JAVASCRIPT == VS ===
== -> use to compare 2 thing ,comparison is not based on datatype when we use ==
*/

if(5=="5")
console.log("true")  // op=> true
if(5 == 5)
console.log("true")  // op=> true

/*  
=== -> use to compare 2 thing ,it will retuen true only if they have same data type & same value means  it chech 2 thing
*/ 
if(5==="5")
console.log("true")  // op=> false
if(5 === 5)
console.log("true")  // op=> true




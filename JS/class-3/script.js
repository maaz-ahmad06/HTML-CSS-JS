/*expression => 2 + 3;
operator => + 
oprent => 2,3

= => assignment operator
== => equility (donot check datatype)
=== => equility (check datatype)

comparasion operators:

> : geater than
< : less than
>= : greater than equal
<= : less than equal
!= : not equal (don't check datatype)
!== : not equal (check datatype)

++ => increment
-- => decrement

value++ => post increment
value-- => post decrement
++value => pre increment
--value => pre decrement

value += 2 => (value = value + 2)
value -= 2 => (value = value - 2)

*/
let a = 20;
let b = 10;

let c;
c = a + b;
console.log("Addition of two numbers " + c);
c = a - b;
console.log("Subtriction of two numbers " + c);
c = a * b;
console.log("Multiplication of two numbers " + c);
c = a / b;
console.log("Division of two numbers " + c);
c = a % b;
console.log("Modulus of two numbers " + c);

let postIncrement = 10;
postIncrement++;
console.log("Post Increment " + postIncrement);

let PostDecrement = 10;
PostDecrement--;
console.log("Post Decrement " + PostDecrement);

let preIncrement = 20;
++preIncrement;
console.log("Pre Incremnet " + preIncrement);

let predecrement = 20;
--predecrement;
console.log("Pre Decrement " + predecrement);

let expresion = 2 * (4 + 3) / 7;
console.log("Expresion Solution " + expresion);
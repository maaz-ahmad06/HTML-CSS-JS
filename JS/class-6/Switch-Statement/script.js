// Switch Statement
// syntax
/* 
switch(key){
    case value:

        breake;
    case value:

        breake;

    default:

        breake;
}
*/

const day = prompt("Enter the day name:");

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    document.write("It is a weekday.");
    break;
  case "Saturday":
  case "Sunday":
    document.write("It is the weekend!");
    break;
  default:
    document.write("Not a valid day.");
}
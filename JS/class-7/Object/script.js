/* 
    ----Objects in JavaScript----
    syntax:
    let object_name = {
        key1: value1,
        key2: value2,
    }
*/

let student_details = {
    name: "John",
    age: 22,
    gender: "Male",
    marks: 885,
    stu_class: "12th",
    contact: "+92 300 1234567",
    address: {
        country: "Pakistan",
        city: "Peshawar",
        street: "Street 1"
    },
    skills: ["HTML", "CSS", "JS"]
}

console.log(student_details.name);
console.log(student_details.age);
console.log(student_details["contact"]);

student_details.id = 12345;
student_details.age = 23;

console.log(student_details);
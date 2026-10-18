const heading = document.getElementById("heading");
heading.innerText = "welcome to DOM";

const messages = document.getElementsByClassName("message");
console.log(messages.length);

messages[1].innerText = "This is the second message";

const para = document.getElementsByTagName("p");
console.log(para.length);

for (let i = 0; i < para.length; i++) {
    para[i].style.color = "blue";
    para[i].style.fontSize = "20px";
    para[i].style.backgroundColor = "lightgray";
}
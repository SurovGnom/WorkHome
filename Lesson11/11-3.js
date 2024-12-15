const div  = document.createElement('div');
div.className ="block"
const button = document.createElement("button");
button.innerText = "Change Color";
const p = document.createElement("p");
p.innerText = "Here is my secret. It is very simple: it is only with the heart that one can see rightly. What is essential is invisible to the eye. - Antoine de Saint Exupéry"
div.appendChild(p);
div.appendChild(button);

button.addEventListener("click",function (e){
    p.style.color === "red" ? p.style.color =" black" : p.style.color = "red";
    e.preventDefault();
})

document.body.insertAdjacentElement("beforeend",div);
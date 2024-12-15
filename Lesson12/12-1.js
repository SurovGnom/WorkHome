const div = document.createElement('div');
const button = document.createElement('button');


const clone = button.cloneNode(true);
clone.innerText = "Write a Link";
const clone2 = clone.cloneNode(true);
clone2.innerText = "Enter to Website";
div.appendChild(clone);
div.appendChild(clone2);

let link;
clone.addEventListener("click", function (e){
    link = prompt("Введіть адресу");
    e.preventDefault();
    return link;
})
clone2.addEventListener("click", function (e){
    e.preventDefault();
    if(!link){
        alert("Write a link first");
        return;
    }
    window.location.href =`http://www.${link}`;
    window.target = "_blank";

})



document.body.insertAdjacentElement('beforeend',div);
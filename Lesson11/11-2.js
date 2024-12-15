const div = document.createElement('div');
div.className = "RandomImg"
const img = document.createElement('img');


function loadRandomImg(img){
    img.src = `./img/${Math.floor(Math.random() * 10)}.jpg`;

    return img;
}
div.insertAdjacentElement('beforeend', loadRandomImg(img));

document.body.insertAdjacentElement("beforeend", div);

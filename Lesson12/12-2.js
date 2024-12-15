const container = document.querySelector('#container');


container.addEventListener('click', (e) => {
    let clickedBtn = e.target.closest('button')
    e.preventDefault();
    console.log(`Клікнуто на кнопку : ${clickedBtn.textContent}`);
})

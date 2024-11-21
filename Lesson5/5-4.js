let numCheck = true;
while(numCheck) {
    let num = +prompt("Введи число ");
    const sq = Math.sqrt(num);
    let count = 1;
    for (let i = 2; i < sq; i++) {
        if (num % i === 0) {
            count = 0;
            alert('Не є простим числом');
        }
        if(count === 1){
            alert('Просте число');
        }
    }
    let result = confirm ("Бажаєте обрахувати ще числа?");
    if(!result){
        numCheck = false;
    }
}
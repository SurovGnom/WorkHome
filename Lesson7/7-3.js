function printChoise() {
    let input;
    let maxIterations = 10;
    for (let i = 0; i < maxIterations; i++) {
        input = prompt("Введіть число");
     if(!input){
         console.log("Canceled");
         break;
     }else if(+input < 100){
        console.log("Less than 100 :" ,input);
     }else if (+input > 100 ){
         console.log("More than 100 :" ,input);
         break;
     }else if (!+input){
         console.log("This is text:" ,input);
         break;
     }
    }
}
printChoise()
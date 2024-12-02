function printChoise() {
    let maxIterations = 10;
    let result = '';
    for (let i = 0; i < maxIterations; i++) {
        let input= prompt("Enter the number");
        if(input <100) {
            result = confirm(`You are sure :${input}`);

       if(!result){
        console.log(input)
        return false;
    }
    }
    if(input >=100 || isNaN(input)) {
        console.log(`Last user\`s value: ${input}`);
        break;
    }

    }
}




    console.log(result);

printChoise()
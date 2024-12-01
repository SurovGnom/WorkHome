const message = prompt('Enter your string');
const chars = prompt('Enter some chars for removing');


// function foo(string: string, arr: Array<string>): string
function foo(string, arr) {
   let array = "";
   let i = 0;

   if(!string){
    return null;
   }
  while (i < string.length) {
    let mate = true;

    for (let g = 0; g < arr.length; g++) {
      if (string[i + g] !== arr[g]) {
         mate = false;
        break;
      }
    }

    if (!mate) {
      array += string[i];
      i++;
      continue;
    }

    i += arr.length;
  }


    return array;

}


const result = foo(message, chars);

alert(result);
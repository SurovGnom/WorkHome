const company = {
    sales: [
        { name: 'Jonh', salary: 1000 },
        { name: 'Alice', salary: 600 },
        { name: 'Bob', salary: 1200 }
    ],
    development: {
        web: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 },
            { name: 'Max', salary: 600 },
        ],
        internals: [
            { name: 'Jack', salary: 1300 }
        ]
    }
}

function totalSales(company) {
      if(Array.isArray(company)) {
          return company.reduce((prev,current) => prev + current.salary, 0);
      }else{
          let sum = 0;
          for( let subDep of Object.values(company)) {
              sum += totalSales(subDep);
          }
          return sum;
      }

}


const total = totalSales(company);
console.log(total);
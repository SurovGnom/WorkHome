let table = document.createElement("table");
table.className = "table";

let row,cell;

for (i = 1; i <=10; i++) {
   row = document.createElement("tr");
   for (j = 1; j <=10; j++) {
   cell = document.createElement(i === 1 || j === 1 ? "th":"td");
   cell.appendChild(document.createTextNode(i*j));
   cell.style.padding = "5px";
   row.appendChild(cell);
   }
   table.appendChild(row);
}
document.body.appendChild(table);
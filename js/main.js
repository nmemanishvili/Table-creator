function createTable() {
    const tbl = document.createElement("table");
    const tbody = document.createElement("tbody");

    let  rows = prompt("number of rows")*1;
    let  columns = prompt("number of columns")*1;

    for(let i=0; i<rows; i++){
        const row = document.createElement("tr")
      for(let j=0; j<columns; j++){
        const cell = document.createElement("td");
        const text = document.createTextNode(`rows ${i} cols ${j}`);
        cell.appendChild(text);
        row.appendChild(cell);
      }; 
      tbody.appendChild(row) ;
    };
    tbl.appendChild(tbody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", 2);
};



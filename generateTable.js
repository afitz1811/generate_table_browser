function createMultiplicationTable(rows, columns){
    let html = '<table>'
    
    for (let rowNumber of Array(rows).keys()) {
        html = html +'<tr>';
        
        for (let columnNumber of Array(columns).keys()){
            html = html +`<td>${(rowNumber+1)*(columnNumber+1)}</td>`;
        }
        
        html = html + '</tr>';
    }
    
    html = html + '</table';

    return html;
}
function onGeneratePressed () {
    let rowsInput = document.getElementById('rows-input').value;
    let columnsInput = document.getElementById('columns-input').value;

    let rows = Number(rowsInput);
    let columns = Number(columnsInput);

    
    /* 
    Needed to use if (!Number.isNaN(rows) && !Number.isNaN(columns)) rather than if (isNaN(rows) && !isNaN(columns)) as shown in training video
    Keeping my workaround of >0 as code doesn't handle negative numbers.
    */
    if(rows>0 && columns>0){
        let tableHTML = createMultiplicationTable(rows, columns);
        document.write(tableHTML);
    }
    else {
      alert("Error: Invalid input");
    }
}
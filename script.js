function insert_Row() {
    let i = 1; // Declare i outside the function
    let sample = document.getElementById('sampleTable');

    // Create a new row
    let newRow = document.createElement('tr');
    
    // Create left cell with "New Cell1"
    let leftCell = document.createElement('td');
    leftCell.textContent = 'New Cell1';
    
    // Create right cell with "New Cell2"
    let rightCell = document.createElement('td');
    rightCell.textContent = 'New Cell2';

    // Append cells to the row
    newRow.appendChild(leftCell);
    newRow.appendChild(rightCell);

    // Add the row to the table
    sample.innerHTML=`${newRow.innerHTML}
	<tr><td>Row1 cell1</td> 
		<td>Row1 cell2</td></tr> 
		<tr><td>Row2 cell1</td> 
		<td>Row2 cell2</td></tr> `;
}

function insert_Row() {
let table=document.getElementById('sampleTable');
	let row=table.insertRow(0);
	let cell1=table.insertCell(0);
	let cell2=table.insertCell(1);
	cell1.textContent="New Cell1";
	cell2.textContent="New Cell2";
}

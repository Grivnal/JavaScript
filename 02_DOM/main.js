const tableBody = document.getElementById('table-body');
const createBtn = document.getElementById('create-btn');
const deleteBtn = document.getElementById('delete-btn');

tableBody.innerHTML = "";
let products = [];

function addProductToTable(product)
{
    tableBody.innerHTML += `<tr class="table-secondary">
                            <th scope="row">${product.Fish}</th>
                            <td>${product.Apple}</td>
                            <td>${product.Egg}</td></tr>`; 
}
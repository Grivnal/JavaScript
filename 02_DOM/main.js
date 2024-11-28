
document.write("<p>Write content</p>")

const tableBody = document.getElementById('table-body');
const createBtn = document.getElementById('create-btn');
const deleteBtn = document.getElementById('delete-btn');
themeBtn.onclick = ()=>{
    if(themeBtn.innerHTML == "Dark Header"){
        themeBtn.innerBtn == "Light Header";
        themeBtn.c}
    else
    {
        themeBtn.innerHTML = "Dark Header"
    }
}

tableBody.innerHTML = "";
let products = [];

createBtn.onclick = () =>{
    //console.log("Clicked from JS");
    const newProduct = getProductFromForm();
    products.push(newProduct);
    // add content
    addProductToTable(newProduct);
}
deleteBtn.onclick = ()=>{
    products = [];
    tableBody.innerHTML = "";
}

function getProductFromForm()
{
    const modelInput = document.getElementById('modelInput');
    const descInput = document.getElementById('descriptionInput');
    const priceInput = document.getElementById('inputPrice');
    return {
        id:products.length+1,
        model:modelInput.value,
        description:descInput.value,
        price:+priceInput.value
    }
}

function addProductToTable(product)
{
    tableBody.innerHTML += `<tr class="table-secondary">
                            <th scope="row">${product.id}</th>
                            <td>${product.model}</td>
                            <td>${product.description}</td>
                            <td>${product.price}</td>
                            </tr>`; 
}

//hw 25-11
// const tableBody = document.getElementById('table-body');
// const createBtn = document.getElementById('create-btn');
// const deleteBtn = document.getElementById('delete-btn');

// tableBody.innerHTML = "";
// let products = [];

// function addProductToTable(product)
// {
//     tableBody.innerHTML += `<tr class="table-secondary">
//                             <th scope="row">${product.Fish}</th>
//                             <td>${product.Apple}</td>
//                             <td>${product.Egg}</td></tr>`; 
//}
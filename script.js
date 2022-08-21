
const cartArray = [];

function display(cartProducts) {
    const tableBody = document.getElementById('table-body');
    let count = 0;
    let priceSum = 0;
    tableBody.innerHTML = "";
    for (const cartProduct of cartProducts) {
        const product = cartProduct.productName;
        const price = cartProduct.productPrice;
        console.log(product, price);

        count++;
        priceSum += price;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${count}</th>
        <td>${product}</td>
        <td>${price}</td>
        `

        tableBody.appendChild(tr);
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th></th>
    <td>Total</td>
    <td>${priceSum}</td>
    `
    tableBody.appendChild(tr);
}

document.getElementById('clear-btn').addEventListener('click', function(){
    document.getElementById('table-body').style.display = 'none';
    document.getElementById('clear-btn').style.display = 'none';
    document.getElementById('products-count').innerText = 0;
})

function addToCart(element) {
    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const cartObj = {
        productName: productName,
        productPrice: parseFloat(productPrice),
    }
    cartArray.push(cartObj);
    document.getElementById('products-count').innerText = cartArray.length;

    document.getElementById('clear-btn').style.display = 'block';
    display(cartArray);
}


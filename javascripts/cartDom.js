const data = require('./data');

const cartOutputDiv = document.getElementById('cart');

const cardBuilder = (items) => {
  let domStrang = '';
  domStrang += `<h3 class="text-center">Your Cart</h3>`;
  domStrang += `<div class="col-xs-8 col-xs-offset-2">`;
  domStrang +=  `<table class="table table-striped">`;
  domStrang +=    `<tr>`;
  domStrang +=      `<th>Name</th>`;
  domStrang +=      `<th>Price</th>`;
  domStrang +=      `<th>Quantity</th>`;
  domStrang +=      `<th></th>`;
  domStrang +=    `</tr>`;
  items.forEach((item) => {
    domStrang +=    `<tr>`;
    domStrang +=      `<td>${item.name}</td>`;
    domStrang +=      `<td>$${item.price.toFixed(2)}</td> `;
    domStrang +=      `<td>${item.purchaseNum}</td>`;
    domStrang +=      `<td><button class="btn btn-danger"><span class="glyphicon glyphicon-trash"></span></td>`;
    domStrang +=     `</tr>`;
  });
  domStrang += `</table>`;
  domStrang += getTotals(items);
  domStrang += `</div>`;
  return domStrang;
};

const getTotals = (items) => {
  let itemTotal = 0;
  let priceTotal = 0;
  items.forEach((item) => {
    itemTotal += (item.purchaseNum * 1);
    priceTotal += (item.purchaseNum * item.price);
  });
  return totalsString(itemTotal, priceTotal);
};

const totalsString = (itemNum, total) => {
  let domString = '';
  domString += `<h4>Total number of items: ${itemNum}</h4>`;
  domString += `<h4>Total price: $${total.toFixed(2)}</h4>`;
  return domString;
};

const printCartToDom = () => {
  const cartItems = data.getCart();
  cartOutputDiv.innerHTML = cardBuilder(cartItems);
};

module.exports = printCartToDom;

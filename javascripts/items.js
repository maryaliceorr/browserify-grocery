const loadItems = (loadThis, nope) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadThis);
  myRequest.addEventListener('error', nope);
  myRequest.open('GET', '../db/items.json');
  myRequest.send();
};

module.exports = loadItems;

let departments = [];
let items = [];
const cart = [];

const getDepartments = () => {
  return departments;
};

const setDepartments = (departmentsArray) => {
  departments = departmentsArray;
};

const setItems = (itemsArray) => {
  items = itemsArray;
};

const getItems = () => {
  return items;
};

const getitemsByDepartment = (departmentId) => {
  const selectedItems = [];
  items.forEach((item) => {
    if (item.departmentId === departmentId) {
      selectedItems.push(item);
    }
  });
  return selectedItems;
};

const setCart = (itemId, numberToAdd) => {
  const itemPosition = items.map(function (item) {
    return item.id;
  }).indexOf(itemId);
  const newItem = items[itemPosition];
  newItem.purchaseNum = numberToAdd;
  cart.push(newItem);
};

module.exports = {
  getDepartments,
  setDepartments,
  getItems,
  setItems,
  getitemsByDepartment,
  setCart,
};

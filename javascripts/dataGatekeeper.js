const loadDepartments = require('./departments');
const loadItems = require('./items');
const departmentDom = require('./departmentDom');
const data = require('./data');

const whenDepartmentsLoad = function () {
  const departmentsData = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsData);
  departmentDom(departmentsData);
};

const whenItemsLoad = function () {
  const itemsData = JSON.parse(this.responseText).items;
  console.log('itemsData', itemsData);
};

const nope = function () {
  console.error('the odds were never in your favor');
};

const initializer = () => {
  loadDepartments(whenDepartmentsLoad, nope);
  loadItems(whenItemsLoad, nope);
};

module.exports = {
  initializer,
};

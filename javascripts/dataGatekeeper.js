const loadDepartments = require('./departments');
const departmentDom = require('./departmentDom');
const data = require('./data');

const whenDepartmentsLoad = function () {
  const departmentsData = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsData);
  departmentDom(departmentsData);
};

const nope = function () {
  console.error('the odds were never in your favor');
};

const initializer = () => {
  loadDepartments(whenDepartmentsLoad, nope);
};

module.exports = {
  initializer,
};

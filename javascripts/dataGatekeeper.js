const loadDepartments = require('./departments');
const departmentDom = require('./departmentDom');

let departmentsArray = [];

const nope = function () {
  console.error('the odds were never in your favor');
};

const loadThis = function () {
  departmentsArray = JSON.parse(this.responseText).departments;
  departmentDom(departmentsArray);
};

const initializer = () => {
  loadDepartments(loadThis, nope);
};

const getDepartments = () => {
  return departmentsArray;
};

module.exports = {
  initializer,
  getDepartments,
};

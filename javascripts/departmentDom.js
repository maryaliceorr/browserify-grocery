const events = require('./events');
const departmentOutputDiv = document.getElementById('departments');

const cardBuilder = (departmentArray) => {
  let domString = '';
  console.log('department-array', departmentArray);
  departmentArray.forEach((department) => {
    domString += `<div class='col-sm-3 department'>`;
    domString +=   `<h3 class='hide department-title' data-department-id='${department.id}'>${department.name}</h3>`;
    domString +=   `<img class='department-image' src='${department.img}'>`;
    domString += `</div>`;
  });
  return domString;
};

const departmentDom = (departmentArray) => {
  departmentOutputDiv.innerHTML = cardBuilder(departmentArray);
  events.addDepartmentEvents();
};

module.exports = departmentDom;

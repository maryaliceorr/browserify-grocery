const departmentOutputDiv = document.getElementById('departments');

const cardBuilder = (departmentArray) => {
  let domString = '';
  console.log('department-array', departmentArray);
  departmentArray.forEach((department) => {
    domString += `<div class='col-sm-3 department'>`;
    domString +=   `<h3 class='hide'>${department.name}</h3>`;
    domString +=   `<img class='department-image' src='${department.img}'>`;
    domString += `</div>`;
  });
  return domString;
};

const printToDom = (departmentArray) => {
  departmentOutputDiv.innerHTML = cardBuilder(departmentArray);
};

module.exports = printToDom;

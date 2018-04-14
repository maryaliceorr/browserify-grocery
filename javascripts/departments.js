const startApplication = (loadThis, nope) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadThis);
  myRequest.addEventListener('error', nope);
  myRequest.open('GET', '../db/departments.json');
  myRequest.send();
};

module.exports = startApplication;

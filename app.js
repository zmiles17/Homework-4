const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];


const print = function () {
  $('#content').empty();
  for (j = 0; j < employeeList.length; j++) {
    render(employeeList[j].name);
    render(employeeList[j].officeNum);
    render(employeeList[j].phoneNum);
  }
}

const verify = function () {
  $('#content').html('<input class="verify-input" placeholder="Enter an Employee Name"></input> <button id="verify-btn">Verify</button>');
  $('#verify-btn').on('click', verifyFunc);
  $('#results').empty();
}
const verifyFunc = function () {
  $('#results').empty();
  let verifyEmployee = $('.verify-input').val().toLowerCase().trim();
  let inList = false;
  for (i = 0; i < employeeList.length; i++) {
    if (verifyEmployee === employeeList[i].name.toLowerCase().trim()) {
      inList = true;
    }
  }
  if (inList) {
    render('Employee Found');
  }
  else {
    render('Employee Not Found');
  }
}


const lookup = function () {
  $('#content').html('<input class="lookup-input" placeholder="Enter an Employee Name"></input> <button id="lookup-btn">Lookup</button>');
  $('#lookup-btn').on('click', lookupFunc);
  $('#results').empty();
}
function lookupFunc() {

  const lookupEmployee = $('.lookup-input').val().toLowerCase().trim();
  const lookupArray = employeeList.filter(employee => employee.name.toLowerCase() === lookupEmployee);
  if(lookupArray.length){
    $('#results').empty();
    lookupArray.forEach(e => render(e.name, e.officeNum, e.phoneNum));
}
else {
  render('Employee Not Found');
}
}


const contains = function () {
  $('#content').html('<input class="contains-input" placeholder="Enter part of an Employee Name"></input> <button id="contains-btn">Contains</button>');
  $('#contains-btn').on('click', containsFunc);
  $('#results').empty();
}
function containsFunc() {
  const containsEmployeeName = $('.contains-input').val().toLowerCase().trim();
  if (containsEmployeeName !== '') {

    for (i = 0; i < employeeList.length; i++) {
      if (employeeList[i].name.toLowerCase().includes(containsEmployeeName)) {
        render(employeeList[i].name);
        render(employeeList[i].officeNum);
        render(employeeList[i].phoneNum);
      }

    }
  }
}

const update = function () {
  $('#content').html('<p class="name">Name</p> <input class="empInput" placeholder="Enter an existing employee name"></input>   <p class="num">Field</p> <input class="fieldInput" placeholder="Enter a field to update (name, phoneNum, officeNum)"></input>  <p class="phone">New Info</p> <input class="valueInput" placeholder="Enter the updated information"></input>  <button id="update-btn">Update</button>');
  $('#update-btn').on('click', updateFunc);
  $('#results').empty();
}
function updateFunc() {
  const updateEmployee = $('.empInput').val().toLowerCase().trim();
  const updateField = $('.fieldInput').val().trim();
  const updateValue = $('.valueInput').val().trim();
  for (i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.toLowerCase() === updateEmployee) {
      employeeList[i][updateField] = updateValue;
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    }
  }
}

const add = function () {
  $('#content').html('<p class="name">Name</p> <input class="add-name-input" placeholder="Enter a new employee name"></input> <p class="num">Number</p> <input class="addnum-input" placeholder="Enter an office number"></input> <p class="phone">Phone</p> <input class="phone-input" placeholder="Enter a phone number"></input> <button class="add-btn">Add</button>');
  $('.add-btn').on('click', addFunc);
  $('#results').empty();
}
const addFunc = function () {
  const addEmployee = $('.add-name-input').val();
  const officeNumber = $('.addnum-input').val();
  const teleNumber = $('.phone-input').val();
  employeeList.push({
    name: addEmployee,
    officeNum: officeNumber,
    phoneNum: teleNumber
  });
  for (i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }
}

const deleteEmp = function () {
  $('#content').html('<input class="delete-input"></input> <button class="delete-btn">Delete</button>')
  $('.delete-btn').on('click', deleteFunc);
  $('#results').empty();
}
const deleteFunc = function () {
  const deleteEmployee = $('.delete-input').val().toLowerCase().trim();
  let index = -1;
  for (i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.toLowerCase().trim() === deleteEmployee) {
      index = i;
      render('Employee Deleted');
    }

  }
  employeeList.splice(index, 1);
  for (i = 0; i < employeeList.length; i++) {

  }
}






$(".print-nav").on('click', print);
$(".verify-nav").on('click', verify);
$(".lookup-nav").on('click', lookup);
$(".contains-nav").on('click', contains);
$(".update-nav").on('click', update);
$(".add-nav").on('click', add);
$(".delete-nav").on('click', deleteEmp);




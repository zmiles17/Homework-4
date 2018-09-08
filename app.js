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
  $('#content').html('<input class="verify-input"></input> <button id="verify-btn">Verify</button>');
  $('#verify-btn').on('click', verifyFunc);
}
const verifyFunc = function () {
  let verifyEmployee = $('.verify-input').val().toLowerCase().trim();
  let inList = false;
  for (i = 0; i < employeeList.length; i++) {
    if (verifyEmployee === employeeList[i].name.toLowerCase()) {
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
  $('#content').html('<input class="lookup-input"></input> <button id="lookup-btn">Lookup</button>');
  $('#lookup-btn').on('click', lookupFunc);
}
function lookupFunc() {

  const lookupEmployee = $('.lookup-input').val().toLowerCase().trim();
  for (i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.toLowerCase().trim() === lookupEmployee) {
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    }
  }
}

const contains = function () {
  $('#content').html('<input class="contains-input"></input> <button id="contains-btn">Contains</button>');
  $('#contains-btn').on('click', containsFunc);
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
  $('#content').html('<p>Name</p> <input class="empInput"></input>   <p>Number</p> <input class="fieldInput"></input>  <p>Phone</p> <input class="valueInput"></input>  <button id="update-btn">Update</button>'); 
  $('#update-btn').on('click', updateFunc);
}
function updateFunc(){
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
  $('#content').html('<p>Name</p> <input class="add-name-input"></input> <p>Number</p> <input class="addnum-input"></input> <p>Phone</p> <input class="phone-input"></input> <button class="add-btn">Add</button>');
  $('.add-btn').on('click', addFunc);
}
const addFunc = function(){
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
}
const deleteFunc = function(){
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




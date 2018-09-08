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
    if (employeeList[i].name.toLowerCase() === lookupEmployee) {
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

  const updateEmployee = prompt('enter an employee');
  const updateField = prompt('enter a field to update (name, officeNum, phoneNum)');
  const updateValue = prompt('enter new value (name, telephone number, or office number');
  for (i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === updateEmployee) {
      employeeList[i][updateField] = updateValue;
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    }
  }
}

const add = function () {

  const addEmployee = prompt('enter a new employee');
  const officeNumber = prompt('enter an office number');
  const teleNumber = prompt('enter a telephone number');
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

  const deleteEmployee = prompt('delete an employee');
  let index = -1;
  for (i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === deleteEmployee) {
      index = i;
    }
  }
  employeeList.splice(index, 1);
  for (i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }
}




$(".print-nav").on('click', print);
$(".verify-nav").on('click', verify);
$(".lookup-nav").on('click', lookup);
$(".contains-nav").on('click', contains);
$(".update-nav").on('click', update);
$(".add-nav").on('click', add);
$(".delete-nav").on('click', deleteEmp);




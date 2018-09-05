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

const userCommand = prompt('enter a command');
 
  if(userCommand === 'print'){ //print
    for (j = 0; j < employeeList.length; j++) {
      render(employeeList[j].name);
      render(employeeList[j].officeNum);
      render(employeeList[j].phoneNum);
    }
  }
  else if(userCommand === 'verify'){ //verify 
    const verifyEmployee = prompt('enter an employee name');
    let inList = false;
    for(i = 0; i < employeeList.length; i++) {
      if(verifyEmployee === employeeList[i].name) {
        inList = true;
      }
    }
    if (inList) {
      render('true');
    }
    else {
      render('false');
    }
  }
    else if (userCommand === 'lookup') { //lookup
      const lookupEmployee = prompt('enter employee name');
      for(i = 0; i < employeeList.length; i++) {
        if(employeeList[i].name === lookupEmployee){
        render(employeeList[i].name);
        render(employeeList[i].officeNum);
        render(employeeList[i].phoneNum);
        }
      }
    }
    else if (userCommand === 'contains') {
      const containsEmployeeName = prompt(`enter a name or part of an employee's name`);

      for(i = 0; i < employeeList.length; i++) {
        if(employeeList[i].name.includes(containsEmployeeName)){
          render(employeeList[i].name);
          render(employeeList[i].officeNum);
          render(employeeList[i].phoneNum);
        }
    
      }
    }
    else if (userCommand === 'update') {
      const updateEmployee = prompt('enter an employee');
      const updateField = prompt('enter a field to update (name, officeNum, phoneNum)');
      const updateValue = prompt('enter new value (name, telephone number, or office number');
      for(i = 0; i < employeeList.length; i++) {
        if(employeeList[i].name === updateEmployee){
          employeeList[i][updateField] = updateValue;
          render(employeeList[i].name);
          render(employeeList[i].officeNum);
          render(employeeList[i].phoneNum);
          }
        }
      }
    else if (userCommand === 'add') {
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
    else if(userCommand === 'delete') {
      const deleteEmployee = prompt('delete an employee');
      let index = -1;
      for(i = 0; i < employeeList.length; i++) {
        if(employeeList[i].name === deleteEmployee){
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
    else{
      alert('invalid command');
    }
  


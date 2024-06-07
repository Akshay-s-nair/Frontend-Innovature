import React from 'react';
import 'D:/Akshay/VSCode/React_projects/innovaturetask2/src/EmployeeList.css'

const EmployeeList = ({ employees, onDeleteEmployee }) => {
  return (
    <div className='emp-container'>
      <div className='title-container'>
      <h2>Employee List</h2>
      </div>
      <div className='list-container'>
      <ul className='employee-list'>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.id}: {employee.name} - {employee.position}
            <button onClick={() => onDeleteEmployee(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default EmployeeList;

import React, { useState } from 'react';
import 'D:/Akshay/VSCode/React_projects/innovaturetask2/src/UpdateEmployee.css'
const UpdateEmployee = ({ onUpdateEmployee }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedEmployee = { name, position };
    onUpdateEmployee(id, updatedEmployee);
    setId('');
    setName('');
    setPosition('');
  };

  return (
    <div className='update-employee-container'>
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Position:</label>
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;

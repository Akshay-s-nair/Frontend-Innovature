import React, { useState } from 'react';
import axios from 'axios';

const DeleteEmployee = () => {
  const [id, setId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.delete(`http://127.0.0.1:7000/employee/${id}`)
      .then(response => {
        console.log(response.data);
        setId('');
      })
      .catch(error => {
        console.error("There was an error deleting the employee!", error);
      });
  };

  return (
    <div>
      <h2>Delete Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteEmployee;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeList from './components/EmployeeList';
import ActionDropdown from './components/ActionDropdown';
import "./App.css"
import Navbar from './components/Navbar';
import Title from './Title'

function App() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = () => {
    axios.get('http://127.0.0.1:7000/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the employees!", error);
      });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleAddEmployee = (newEmployee) => {
    axios.post('http://127.0.0.1:7000/employee', newEmployee)
      .then(response => {
        fetchEmployees(); // Fetch updated list after adding
      })
      .catch(error => {
        console.error("There was an error adding the employee!", error);
      });
  };

  const handleUpdateEmployee = (id, updatedEmployee) => {
    axios.put(`http://127.0.0.1:7000/employee/${id}`, updatedEmployee)
      .then(response => {
        fetchEmployees(); // Fetch updated list after updating
      })
      .catch(error => {
        console.error("There was an error updating the employee!", error);
      });
  };

  const handleDeleteEmployee = (id) => {
    axios.delete(`http://127.0.0.1:7000/employee/${id}`)
      .then(response => {
        fetchEmployees(); // Fetch updated list after deleting
      })
      .catch(error => {
        console.error("There was an error deleting the employee!", error);
      });
  };
  

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Title />
        <div className='row'>
          <div className='action-container'>
            <ActionDropdown onAddEmployee={handleAddEmployee} onUpdateEmployee={handleUpdateEmployee} />
          </div>
          <div className='employee-list-container'>
            <EmployeeList employees={employees} onDeleteEmployee={handleDeleteEmployee} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

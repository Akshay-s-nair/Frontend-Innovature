import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import AddEmployee from './AddEmployee';
import UpdateEmployee from './UpdateEmployee';
import 'D:/Akshay/VSCode/React_projects/innovaturetask2/src/ActionDropdown.css'

const ActionDropdown = ({ onAddEmployee, onUpdateEmployee }) => {
  const [action, setAction] = useState('add');

  const handleSelect = (value) => {
    setAction(value);
  };

  return (
    <div className="action-container">
      <h2>Select Action</h2>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="dropdown-trigger">Actions</DropdownMenu.Trigger>
        <DropdownMenu.Content className="dropdown-content">
          <DropdownMenu.Item onSelect={() => handleSelect('add')}>Add Employee</DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => handleSelect('update')}>Update Employee</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      {action === 'add' && <AddEmployee onAddEmployee={onAddEmployee} />}
      {action === 'update' && <UpdateEmployee onUpdateEmployee={onUpdateEmployee} />}
    </div>
  );
};

export default ActionDropdown;

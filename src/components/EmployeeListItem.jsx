import React from 'react';

function EmployeeListItem({ employee, onClick }) {
  return (
    <div className="employee-list-item" onClick={onClick}>
      <img src={employee.avatar} alt={employee.name} className="avatar" />
      <div>
        <h2>{employee.name}</h2>
        <p>{employee.title}</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;

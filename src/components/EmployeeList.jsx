import React from "react"
import EmployeeListItem from "./EmployeeListItem"

function EmployeeList({ employees, onEmployeeSelect }) {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeListItem
          key={employee.id}
          employee={employee}
          onClick={() => onEmployeeSelect(employee)}
        />
      ))}
    </div>
  )
}

export default EmployeeList

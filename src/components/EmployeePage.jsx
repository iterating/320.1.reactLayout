import React from "react"
import Header from "./Header"

// Render a div with class 'employee-page' to contain the employee page.
function EmployeePage({ employee, goBack }) {
  return (
    <div className="employee-page">
      <Header title="Employee" />
      <button onClick={goBack} className="back-button">
        Back
      </button>
      <div className="employee-details">
        <img
          src={employee.avatar}
          alt={employee.name}
          className="avatar-large"
        />
        <h2>{employee.name}</h2>
        <p>{employee.title}</p>
        <ul>
          <li>
            <strong>Call Office:</strong> {employee.officePhone}
          </li>
          <li>
            <strong>Call Mobile:</strong> {employee.mobilePhone}
          </li>
          <li>
            <strong>SMS:</strong> {employee.mobilePhone}
          </li>
          <li>
            <strong>Email:</strong> {employee.email}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default EmployeePage

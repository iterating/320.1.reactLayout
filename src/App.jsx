import React from "react"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import EmployeePage from "./components/EmployeePage"
import "./App.css"

function App() {
  // State to hold the currently selected employee.
  const [selectedEmployee, setSelectedEmployee] = React.useState(null)

  // Render the main application component
  return (
    <div className="App">
      {selectedEmployee ? (
        // Render the EmployeePage if an employee is selected
        <EmployeePage
          employee={selectedEmployee}
          goBack={() => setSelectedEmployee(null)}
        />
      ) : (
        // Render the HomePage if no employee is selected
        <HomePage onEmployeeSelect={setSelectedEmployee} />
      )}
    </div>
  )
}

export default App

import React, { useState } from "react"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import EmployeePage from "./components/EmployeePage"
import "./App.css"

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null)

  // Render the main application component
  return (
    <div className="App">
      {selectedEmployee ? (
        // Render the EmployeePage if an employee is selected
        <EmployeePage
          employee={selectedEmployee}
          goBack={() => setSelectedEmployee(null)} 
          // Function to go back to the HomePage
        />
      ) : (
        // Render the HomePage if no employee is selected
        <HomePage onEmployeeSelect={setSelectedEmployee} />
      )}
    </div>
  )

export default App

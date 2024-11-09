import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import EmployeePage from './components/EmployeePage';
import './App.css';

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className="App">
      {selectedEmployee ? (
        <EmployeePage employee={selectedEmployee} goBack={() => setSelectedEmployee(null)} />
      ) : (
        <HomePage onEmployeeSelect={setSelectedEmployee} />
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeForm from './components/Employee/EmployeeForm';
import EmployeeTable from './components/Employee/EmployeeTable';

const App = () => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const editEmployee = (index) => {
    const employee = employees[index];
    // Logica para editar el empleado
  };

  const deleteEmployee = (index) => {
    const newEmployees = employees.filter((_, i) => i !== index);
    setEmployees(newEmployees);
  };

  return (
    <div className="container">
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeTable employees={employees} editEmployee={editEmployee} deleteEmployee={deleteEmployee} />
    </div>
  );
};

export default App;

import React, {useState, useEffect} from 'react';
import './EmployeeTable.css'
import axios from 'axios';
import API_BASE_URL from '../../config';


const EmployeeTable = () => {
    const [employees, setEmployees] = useState([]);
  
    // Cargar empleados desde la API cuando el componente se monte
    useEffect(() => {
      axios.get(`${API_BASE_URL}/employees`)
        .then((response) => {
          setEmployees(response.data);
        })
        .catch((error) => {
          console.error('Error al cargar empleados:', error);
        });
    }, []);
  
    // Manejar la eliminación de empleados
    const handleDelete = (employeeId) => {
      axios.delete(`${API_BASE_URL}/employees/${employeeId}`)
        .then(() => {
          setEmployees(employees.filter((employee) => employee.id !== employeeId));
        })
        .catch((error) => {
          console.error('Error al eliminar empleado:', error);
        });
    };
  
    // Renderizar la tabla de empleados
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Posición</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.description}</td>
              <td>{employee.status === 'active' ? 'Activo' : 'Inactivo'}</td>
              <td>
                <button className="btn btn-primary">Editar</button>
                <button className="btn btn-danger" onClick={() => handleDelete(employee.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default EmployeeTable;
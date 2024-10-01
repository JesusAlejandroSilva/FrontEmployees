import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config';
import './EmployeeForm.css';

const EmployeeForm = ({ onAddEmployee }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('active');

  const handleSubmit = (e) => {
    e.preventDefault();

    const employeeData = {
      name,
      position,
      description,
      status,
    };

    // Aquí haces la solicitud POST a la API
    axios.post(`${API_BASE_URL}/employees`, employeeData)
      .then((response) => {
        console.log(response.data);
        onAddEmployee(response.data); // Llamar al método para agregar el nuevo empleado
        setName('');
        setPosition('');
        setDescription('');
        setStatus('active');
        // Mostrar notificación de éxito si es necesario
      })
      .catch((error) => {
        console.error('Error al guardar el empleado:', error);
        // Mostrar notificación de error si es necesario
      });
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
    <h2>Employee Form</h2>
      <div className="form-group">
        <label htmlFor="name">Nombre del empleado</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="position">Posición</label>
        <input
          type="text"
          id="position"
          className="form-control"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="status">Estado</label>
        <select
          id="status"
          className="form-control"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="active">Activo</option>
          <option value="inactive">Inactivo</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">Guardar Empleado</button>
    </form>
  );
};

export default EmployeeForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [usuarios, setUsuarios] = useState([]);
  const [formData, setFormData] = useState({ nombre: '', apellido: '', contrasena: '' });

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:5000/usuarios');
      setUsuarios(response.data);
    } catch (error) {
      console.error('Error al obtener los usuarios', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/usuarios', formData);
      fetchUsuarios(); // Actualiza la lista después de agregar
      setFormData({ nombre: '', apellido: '', contrasena: '' });
    } catch (error) {
      console.error('Error al registrar el usuario', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/usuarios/${id}`);
      fetchUsuarios();
    } catch (error) {
      console.error('Error al eliminar el usuario', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={formData.contrasena}
          onChange={(e) => setFormData({ ...formData, contrasena: e.target.value })}
          required
        />
        <button type="submit">Registrar</button>
      </form>

      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            {usuario.nombre} {usuario.apellido}
            <button onClick={() => handleDelete(usuario.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

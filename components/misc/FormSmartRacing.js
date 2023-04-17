import { useState } from 'react';
import ButtonOutline from "../misc/ButtonOutline.";

export default function Form() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonFormData = JSON.stringify(formData);
    console.log(jsonFormData);
    try {
      const response = await fetch('/data/pauta-smart-racing.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonFormData,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Nombre
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          name="name"
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Correo electrónico
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="email"
          placeholder="Ingresa tu correo electrónico"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
          Empresa o Marca
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="empresa"
          name="empresa"
          placeholder="Ingresa tu mensaje"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
          Mensaje
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          name="message"
          placeholder="Ingresa tu mensaje"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <a>
        <ButtonOutline
          type="submit"
        >
          Enviar
        </ButtonOutline>
        </a>
      </div>
    </form>
  );
}
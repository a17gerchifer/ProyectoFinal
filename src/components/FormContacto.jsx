import React, { useState } from "react";

const FormContacto = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { nombre, email, mensaje } = e.target.elements;
    let details = {
      nombre: nombre.value,
      email: email.value,
      mensaje: mensaje.value,
    };
    let response = await fetch("http://localhost:3000/contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div class="form espacioTop">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" required />
            </div>
            <button type="submit">{status}</button>
        </form>
    </div>
  );
};

export default FormContacto;
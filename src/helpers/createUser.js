export const createUser = async (data) => {
  try {
    const url = `http://127.0.0.1:8000/usuarios`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })

    if (response.ok) {
      const message = await response.json();
      if (message.message === "Usuario creado exitosamente") {
        alert('Usuario creado correctamente!');
      } else {
        alert('Error al crear el usuario...');        
      }
    }

  } catch (error) {
    console.error('There has been an error while sending the request status: ', error);
  }
}
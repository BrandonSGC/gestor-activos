export const createAssetRequest = async (assetId, userId) => {
  try {
    const url = `http://127.0.0.1:8000/crear-solicitud/?activo_num_serie=${assetId}&usuario_id=${userId}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      const message = await response.json();
      if (message.message === "Solicitud creada exitosamente") {
        alert('Solicitud creada correctamente!');
      } else {
        alert('Error al crear la solicitud...');
      }
    }
  } catch (error) {
    console.error('There has been an error while sending the request status: ', error);
  }
}
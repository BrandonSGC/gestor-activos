export const sendRequestStatus = async (requestId, status) => {
  try {
    const url = `http://127.0.0.1:8000/actualizar-solicitud/?solicitud_id=${requestId}&estado=${status}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      return await response.json();
    }

  } catch (error) {
    console.error('There has been an error while sending the request status: ', error);
  }
}
export const sendRequestStatus = async ({requestId, status}) => {
  try {
    const url = `${requestId}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(status),
    })

    if (response.ok) {
      return await response.json();
    }

  } catch (error) {
    console.error('There has been an error while sending the request status: ', error);
  }
}
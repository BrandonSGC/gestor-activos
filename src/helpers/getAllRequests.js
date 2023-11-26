export const getAllRequests = async() => {
  try {
    const url = ``;
    const response = await fetch(url);
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error(`There has been an error getting the requests: ${error}`);
  }
}
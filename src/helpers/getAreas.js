export const getAreas = async() => {
  try {
    const url = `http://127.0.0.1:8000/areas`;
    const response = await fetch(url);
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error(`There has been an error getting the assets: ${error}`);
  }
}
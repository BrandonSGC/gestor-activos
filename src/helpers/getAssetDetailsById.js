export const getAssetDetailsById = async(id) => {
  try {
    const url = `${id}`;
    const response = await fetch(url);
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error(`There has been an error getting the asset details: ${error}`);
  }
}
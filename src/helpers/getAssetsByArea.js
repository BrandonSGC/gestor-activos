export const getAssetsByArea = async(area) => {
  try {
    const url = `${area}`;
    const response = await fetch(url);
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error(`There has been an error getting the assets: ${error}`);
  }
}
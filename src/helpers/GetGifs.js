
export const getGifs = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=CYt5Ro5pptoL46EuxY6poFzie0vz1gIC&q=${categoria}&limit=10`;
  const response = await fetch(url);
  const { data = [] } = await response.json(); //Igualamos la data a un arreglo para asegurarnos que siempre sea una array

  const gifs = data.map(gif => ({
    id: gif.id,
    title: gif.title,
    img: gif.images.downsized_medium.url
  }));
  return gifs;
}
export const getGames = async () => {
    try {
      const endPoint = "/api/games";  // Se agrego un proxy configurado en Vite.config
      const response = await fetch(endPoint);
      const data = await response.json();
      //console.log("Datos recibidos de API:", data);
      return data || []; 

    } catch (error) {
      console.error("Error al recuperar los juegos:", error);
      return []; 
    }
  };
  
  export const getGameDetails = async (gameId) => {
    try {
      const endPoint = `/api/game?id=${gameId}`;
      const response = await fetch(endPoint);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener los detalles del juego:", error);
      throw error;
    }
  };
  
  
import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoriteContext = createContext();

export const useFavorites = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Para cargar favoritos desde localStorage 
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Para Guardar favoritos en localStorage cada vez que cambien <--si cambia
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (game) => {
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites, game];
      return newFavorites;
    });
  };

  const removeFavorite = (gameId) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter((game) => game.id !== gameId);
      return newFavorites;
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

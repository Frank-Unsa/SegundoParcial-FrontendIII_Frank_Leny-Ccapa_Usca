import React from 'react';
import { useFavorites } from '../context/FavoriteContext';
import GameCard from '../components/GameCard';
import { Link } from 'react-router-dom';
import styles from './Favorites.module.css';

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className={styles.favorites}>

      <h1>Tus juegos favoritos</h1>

      <div className={styles.gameList}>
        {favorites.length === 0 ? ( <p>No hay favoritos todavía.</p>) : (
          favorites.map((game) => (
            <div key={game.id} className="">
             
              <GameCard
                game={game}
                isFavorite={true}
                onFavoriteToggle={() => removeFavorite(game.id)}
              />
             
            </div>
          ))
        )}
      </div>

      <Link to="/">
        <button className={styles.homeButton}>Ir a Inicio</button>
      </Link>

    </div>
  );
};

export default Favorites;
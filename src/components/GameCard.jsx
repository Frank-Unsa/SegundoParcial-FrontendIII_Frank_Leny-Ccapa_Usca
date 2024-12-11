import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GameCard.module.css';

const GameCard = ({ game, isFavorite, onFavoriteToggle }) => {
  return (
    <div className={styles['game-card']}>
      <img src={game.thumbnail} alt={game.title} />
      <h3>{game.title}</h3>
      <p>{game.genre}</p>
      <button className={styles.favoriteButton} onClick={onFavoriteToggle}>
        {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      </button>
      
      <Link to={`/game/${game.id}`} className={styles.detailsButtonGame}>
        <span>Ver detalles</span>
      </Link>

      <a className={styles.playNow} href={game.game_url} target="_blank" rel="noopener noreferrer">
      Jugar ahora
      </a>
    </div>
  );
};

export default GameCard;

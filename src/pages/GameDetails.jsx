import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameDetails } from '../services/gameService';
import styles from './GameDetails.module.css';

const GameDetails = () => {
  const { gameId } = useParams();
  const [gameDetails, setGameDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const data = await getGameDetails(gameId);
        setGameDetails(data);
        setLoading(false);
      } catch (error) {
        setError('Error al obtener los detalles del juego');
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [gameId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const renderSystemRequirements = (requirements) => {
    
    if (!requirements) {
      return <p>Información sobre los requisitos del sistema no disponible.</p>;
    }

    const { os, processor, memory, graphics, storage } = requirements;
    return (
      <ul>
        <li><strong>OS:</strong> {os ? os : 'No disponible'}</li>
        <li><strong>Procesador:</strong> {processor ? processor : 'No disponible'}</li>
        <li><strong>Memoria:</strong> {memory ? memory : 'No disponible'}</li>
        <li><strong>Graficos:</strong> {graphics ? graphics : 'No disponible'}</li>
        <li><strong>Almacenamiento:</strong> {storage ? storage : 'No disponible'}</li>
      </ul>
    );
  };

  return (
    <div className={styles.gameDetails}>
      <h1>{gameDetails.title}</h1>
      <img src={gameDetails.thumbnail} alt={gameDetails.title} />
      <p>{gameDetails.description}</p>
      <p><strong>Genero:</strong> {gameDetails.genre}</p>
      <p><strong>Plataforma:</strong> {gameDetails.platform}</p>
      <p><strong>Fecha de lanzamiento :</strong> {gameDetails.release_date}</p>
      <p><strong>Estado:</strong> {gameDetails.status}</p>
      <p><strong>Publisher:</strong> {gameDetails.publisher}</p>
      <p><strong>Desarrollador:</strong> {gameDetails.developer}</p>

      <h3>Requisitos mínimos del sistema</h3>
      {renderSystemRequirements(gameDetails.minimum_system_requirements)}

      <h3>Screenshots</h3>
      <div className={styles.screenshots}>
        {gameDetails.screenshots.map((screenshot) => (
          <img key={screenshot.id} src={screenshot.image} alt="Game Screenshot" />
        ))}
      </div>

      <a href={gameDetails.game_url} target="_blank" rel="">Jugar ahora</a>
    </div>
  );
};

export default GameDetails;

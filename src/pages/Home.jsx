import React, { useEffect, useState, useMemo } from 'react';
import { getGames } from '../services/gameService';
import GameCard from '../components/GameCard';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';
import { useFavorites } from '../context/FavoriteContext';
import { useFilters } from '../context/FilterContext';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(10);
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const { filters } = useFilters();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await getGames();
        setGames(data);
        setLoading(false);
      } catch (error) {
        setError('Error al obtener los juegos');
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  
  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const genreMatch = filters.genre ? game.genre === filters.genre : true;
      const platformMatch = filters.platform ? game.platform === filters.platform : true;
      const searchMatch = filters.searchTerm ? game.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) : true;
      return genreMatch && platformMatch && searchMatch;
    });
  }, [games, filters]);

  
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  const isFavorite = (gameId) => favorites.some((game) => game.id === gameId);

  const handleFavoriteToggle = (game) => {
    if (isFavorite(game.id)) {
      removeFavorite(game.id);
    } else {
      addFavorite(game);
    }
  };

  return (
    <div className="home">
      <h1>Juegos disponibles</h1>
      
      <div className={styles.filtersContainer}>
        <SearchBar />
        <FilterBar />
      </div>

      <div className={styles.gameList}>
        {currentGames.length > 0 ? (
          currentGames.map((game) => (
            <div key={game.id}>
              <GameCard 
                game={game} 
                isFavorite={isFavorite(game.id)} 
                onFavoriteToggle={() => handleFavoriteToggle(game)} 
              />
             
            </div>
          ))
        ) : (
          <p>No se encontraron juegos con los filtros seleccionados.</p>
        )}
      </div>

      
      <div className={styles.pagination}>
        <button 
          onClick={() => paginate(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span> Página {currentPage}</span>
        
        <button 
          onClick={() => paginate(currentPage + 1)} 
          disabled={indexOfLastGame >= filteredGames.length}
        >
          Next
        </button>
      </div>

      <Link to="/favorites" className={styles.goToFavorites}>Ir a favoritos</Link>
    
    </div>
  );
};

export default Home;

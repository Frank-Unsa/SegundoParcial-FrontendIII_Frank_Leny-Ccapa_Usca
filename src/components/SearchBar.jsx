import React from 'react';
import { useFilters } from '../context/FilterContext';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const { filters, updateFilters } = useFilters();

  const handleSearchChange = (e) => {
    updateFilters({ searchTerm: e.target.value });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(filters.searchTerm);
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSearchSubmit}>
      <input
        type="text"
        value={filters.searchTerm}
        onChange={handleSearchChange}
        placeholder="Buscar juegos..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
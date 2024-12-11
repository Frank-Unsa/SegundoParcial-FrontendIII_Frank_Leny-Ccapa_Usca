import React from 'react';
import { useFilters } from '../context/FilterContext';
import styles from './FilterBar.module.css';

const FilterBar = () => {
  const { filters, updateFilters } = useFilters();

  const handleGenreChange = (e) => {
    updateFilters({ genre: e.target.value });
  };

  const handlePlatformChange = (e) => {
    updateFilters({ platform: e.target.value });
  };

  return (
    <div className={styles.filterBar}>
      <select 
        value={filters.genre} 
        onChange={handleGenreChange} 
        className={styles.select}
      >
        <option value="">Seleccionar género</option>
        <option value="Action">Acción</option>
        <option value="MMORPG">MMORPG</option>
        <option value="Strategy">Estrategia</option>
        
      </select>
      
      <select 
        value={filters.platform} 
        onChange={handlePlatformChange} 
        className={styles.select}
      >
        <option value="">Seleccionar Plataforma</option>
        <option value="PC (Windows)">PC</option>
        <option value="Web Browser">Navegador Web</option>
      </select>
    </div>
  );
};

export default FilterBar;
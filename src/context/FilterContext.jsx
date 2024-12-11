import React, { createContext, useContext, useReducer } from 'react';

const FilterContext = createContext();

const initialState = {
  genre: '',
  platform: '',
  searchTerm: '',
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const FilterProvider = ({ children }) => {
  const [filters, dispatch] = useReducer(filterReducer, initialState);

  const updateFilters = (newFilters) => {
    dispatch({ type: 'UPDATE_FILTER', payload: newFilters });
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
};
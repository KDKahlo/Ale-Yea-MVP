// FlavorContext.js
import React, { createContext, useState, useContext } from 'react';

const FlavorContext = createContext();

export const FlavorProvider = ({ children }) => {
  const [flavor, setFlavor] = useState('');

  return (
    <FlavorContext.Provider value={{ flavor, setFlavor }}>
      {children}
    </FlavorContext.Provider>
  );
};

export const useFlavor = () => useContext(FlavorContext);

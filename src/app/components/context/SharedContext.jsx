'use client';
import React, { createContext, useRef } from 'react';

export const SharedContext = createContext();

export const SharedProvider = ({ children }) => {
  const stickyElement = useRef(null);

  return (
    <SharedContext.Provider value={{ stickyElement }}>
      {children}
    </SharedContext.Provider>
  );
};

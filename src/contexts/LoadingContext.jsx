import React, { createContext, useContext, useState, useEffect } from 'react';

const LoadingContext = createContext();

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [loadingStates, setLoadingStates] = useState({
    fonts: false,
    images: false,
    components: false,
  });

  // Check if all critical resources are loaded
  const allLoaded = Object.values(loadingStates).every(state => state);

  useEffect(() => {
    if (allLoaded && isInitialLoading) {
      // Add a small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsInitialLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [allLoaded, isInitialLoading]);

  const updateLoadingState = (key, value) => {
    setLoadingStates(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <LoadingContext.Provider value={{
      isInitialLoading,
      loadingStates,
      updateLoadingState,
      allLoaded
    }}>
      {children}
    </LoadingContext.Provider>
  );
};

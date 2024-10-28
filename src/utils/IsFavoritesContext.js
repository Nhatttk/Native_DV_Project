import React, { useState } from "react";

const IsFavoritesContextType = {
    isfavorite: false,
    setIsfavorite: () => {},
    idItem: null,
    setIdItem: () => {},
    removing: false,
    setRemoving: () => {},
  };
  
  // Create the context with a default value of `undefined`
  export const IsFavoritesContext = React.createContext(IsFavoritesContextType);
  // export const IsFavoritesContext = React.createContext(null);
  
  const IsFavoritesProvider = ({ children }) => {
    const [isfavorite, setIsfavorite] = useState(false);
    const [idItem, setIdItem] = useState(null);
    const [removing, setRemoving] = useState(false);
  
    return (
      <IsFavoritesContext.Provider value={[ isfavorite, setIsfavorite, idItem, setIdItem, removing, setRemoving]}>
        {children}
      </IsFavoritesContext.Provider>
    );
  };
  
  export default IsFavoritesProvider;
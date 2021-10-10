import React, { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext({ favorites: {} });

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const favortiteUsers = localStorage.getItem('favoriteUsers');
        if (favortiteUsers) {
            return JSON.parse(favortiteUsers)
        }
        return {}
    });
    
    useEffect(() => {
        localStorage.setItem('favoriteUsers', JSON.stringify(favorites))
    }, [favorites])

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
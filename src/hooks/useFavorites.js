import React, { useContext } from 'react';
import { FavoritesContext } from '../Context/FavoritesContext';

export const useFavorites = () => {
    
    const { favorites, setFavorites } = useContext(FavoritesContext);

    const isFavorite = (user) => !!favorites[getUserId(user)];

    const getUserId = (user) => user.login.uuid;

    const toggleFavorite = (user) => {
        setFavorites(prevFavorites => {
            const { [getUserId(user)]: targetUser, ...restOfTheFavorites } = prevFavorites;
            // If the user existed, then delete
            if (targetUser) return restOfTheFavorites
            // add new user to localstorage
            return { ...prevFavorites, [getUserId(user)]: user };
        });
    }

    return { toggleFavorite, isFavorite, favorites: Object.values(favorites) };
}
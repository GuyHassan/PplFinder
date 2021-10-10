import React, { useState, useEffect } from 'react';


export const useFavorites = () => {
    const [favorites, setFavorites] = useState(() => {
        const favortiteUsers = localStorage.getItem('favoriteUsers');
        if (favortiteUsers) {
            return JSON.parse(favortiteUsers)
        }
        return {}
    });

    const addToFavorites = (user) => {
        setFavorites(prevFavorites => ({ ...prevFavorites, [getUserId(user)]: user }));
    }

    const deleteFromFavorites = (user) => {
        setFavorites(prevFavorites => {
            const { [getUserId(user)]: toDelete, ...restOfTheFavorites } = prevFavorites;
            return restOfTheFavorites;
        });

    }

    const isFavorite = (user) => {
        return !!favorites[getUserId(user)];
    }

    const toggleFavorite = (user) => {
        if (isFavorite(user)) {
            deleteFromFavorites(user);
            return
        }
        addToFavorites(user);
    }

    const getUserId = (user) => {
        return user.login.uuid;
    }

    useEffect(() => {
        localStorage.setItem('favoriteUsers', JSON.stringify(favorites))
    }, [favorites])

    return { toggleFavorite, isFavorite, favorites: Object.values(favorites) };
}
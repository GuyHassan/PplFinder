import React, { useEffect, useState } from 'react';
import * as S from "../Home/style";
import Text from "components/Text";
import UserList from 'components/UserList/index';
import { useFavorites } from 'hooks/useFavorites';

const Favorite = () => {
    const [countries, setCountries] = useState(new Set());
    const { favorites } = useFavorites();

    useEffect(() => {
        setCountries(prev => {
            favorites.forEach(favorite => {
                prev.add(favorite.location.country);
            })
            return new Set(prev);
        })
    }, [])
    return (

        <S.Home>
            <S.Content>
                <S.Header>
                    <Text size="45px" bold >
                        Favorites People
                    </Text>
                </S.Header>
                <UserList users={favorites} countries={Array.from(countries)} />
            </S.Content>
        </S.Home>

    )
}
export default Favorite;
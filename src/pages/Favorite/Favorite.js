import React from 'react';
import * as S from "../Home/style";
import Text from "components/Text";
import UserList from 'components/UserList/index';
import { useFavorites } from 'hooks/useFavorites';

const Favorite = () => {
    const { favorites } = useFavorites();

    // every render i recalculate the countries again
    const getUniqueUsersCountries = (user) => user.location.country;
    const countries = new Set(favorites.map(v => getUniqueUsersCountries(v)))

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
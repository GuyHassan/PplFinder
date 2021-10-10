import React, { useState, useEffect } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

const Home = () => {
  const { users, isLoading, fetchUsers } = usePeopleFetch();
  const [usersList, setUsersList] = useState([]);

  // every render i calculate the countries again
  const getUniqueUsersCountries = (user) => user.location.country;
  const countries = new Set(users.map(v => getUniqueUsersCountries(v)).slice(0, 7));

  useEffect(() => {
    setUsersList(users)
  }, [users])

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="50px" bold>
            People Finder
          </Text>
        </S.Header>
        <UserList
          users={usersList}
          isLoading={isLoading}
          countries={Array.from(countries)}
          loadMorePpl={fetchUsers} />
      </S.Content>
    </S.Home>
  );
};

export default Home;

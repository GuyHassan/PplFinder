import React, { useState, useEffect } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

const Home = () => {
  const { users, isLoading, fetchUsers } = usePeopleFetch();
  const [usersList, setUsersList] = useState([]);
  const [countries, setCountries] = useState(new Set())

  useEffect(() => {
    setUsersList(users)
  }, [users])

  useEffect(() => {
    setCountries(prev => {
      users.forEach(user => {
        prev.add(user.location.country);
      })
      return new Set(Array.from(prev).slice(0, 7));
    })
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

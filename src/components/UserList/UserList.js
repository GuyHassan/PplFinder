import React, { useState, useRef, useCallback } from "react";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import * as S from "./style";
import { useFavorites } from "hooks/useFavorites";
import User from "./User";

const UserList = ({ users, isLoading, loadMorePpl, countries }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const [countriesFilter, setCountiesFilter] = useState({})
  const { toggleFavorite, isFavorite } = useFavorites();
  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  // add to countriesFilter flag who is clicked, and remove when reclick
  const handleSetFilter = (country) => {
    const { [country]: currentFilterState, ...restOfTheFilters } = countriesFilter;

    if (currentFilterState) {
      setCountiesFilter(restOfTheFilters);
      return
    }
    setCountiesFilter(p => ({ ...p, [country]: true }))

  }

  // when the user selected one of countries from the checkbox
  const applyCountriesFilters = () => {
    if (!Object.keys(countriesFilter).length)
      return users;
    return users.filter(user => countriesFilter[user.location.country])
  }

  // itersection observer, infinite scroll logics
  const observer = useRef();
  const lastPplElementRef = useCallback(node => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        loadMorePpl && loadMorePpl()
      }
    })
    if (node) observer.current.observe(node)

  }, [isLoading])

  return (
    <S.UserList>
      <S.Filters>
        {countries.map(country =>
          <CheckBox
            value={country}
            label={country}
            key={country}
            isChecked={countriesFilter[country]}
            onChange={() => handleSetFilter(country)}
          />)}
      </S.Filters>
      <S.List >
        {applyCountriesFilters().map((user, index) => {
          if (users.length === index + 1) {
            return <div ref={lastPplElementRef}>
              <User
                user={user}
                index={index}
                key={index}
                toggleFavorite={toggleFavorite}
                isFavorite={isFavorite}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                hoveredUserId={hoveredUserId}

              /></div>
          } else {
            return <User
              user={user}
              index={index}
              key={index}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              hoveredUserId={hoveredUserId}
            />
          }
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;

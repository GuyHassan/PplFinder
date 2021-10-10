import React from 'react';
import Text from "components/Text";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const User = ({ user, index, toggleFavorite, isFavorite, handleMouseEnter, handleMouseLeave, hoveredUserId }) => {

    return (
        <S.User
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => toggleFavorite(user)}
        >
            <S.UserPicture src={user?.picture.large} alt="" />
            <S.UserInfo>
                <Text size="22px" bold>
                    {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                    {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                    {user?.location.city} {user?.location.country}
                </Text>
            </S.UserInfo>
            <S.IconButtonWrapper isVisible={index === hoveredUserId || isFavorite(user)}>
                <IconButton>
                    <FavoriteIcon color="error" />
                </IconButton>
            </S.IconButtonWrapper>
        </S.User>
    )
}
export default User;
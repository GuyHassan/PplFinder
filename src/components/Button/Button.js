import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import * as C from "constant";
import * as S from './style.js';

const Button = ({
  label,
  color = C.COLORS.default,
  disabled,
  size = C.SIZE.medium,
  variant = C.VARIANT.text,
  onClick,
}) => {
  return (
    <S.ButtonWrapper onClick={onClick}>
      <MuiButton
        key={label}
        color={color || 'primary'}
        disabled={disabled}
        size={size}
        variant={variant}
      >
        {label}
      </MuiButton>
    </S.ButtonWrapper >
  );
};

export default Button;

import React from 'react';
import classnames from 'classnames';

import './Button.css';

const ButtonSizeVariant = {
  Regular: 'regular',
  Big: 'big',
  Small: 'small'
};
const ButtonKindVariant = {
  Regular: 'regular',
  Flat: 'flat',
  Raised: 'raised',
  Badge: 'badge',
};
const ButtonColorVariant = {
  Regular: 'regular',
  Danger: 'danger',
  White: 'white',
  Smoke: 'smoke',
};

const ButtonSizeClasses = {
  [ButtonSizeVariant.Regular]: '',
  [ButtonSizeVariant.Small]: 'cs-button--small',
  [ButtonSizeVariant.Big]: 'cs-button--big',
};
const ButtonKindClasses = {
  [ButtonKindVariant.Regular]: '',
  [ButtonKindVariant.Flat]: 'cs-button--flat',
  [ButtonKindVariant.Raised]: 'cs-button--raised',
  [ButtonKindVariant.Badge]: 'cs-button--badge',
};
const ButtonColorClasses = {
  [ButtonColorVariant.Regular]: '',
  [ButtonColorVariant.Danger]: 'cs-button--danger',
  [ButtonColorVariant.White]: 'cs-button--white',
  [ButtonColorVariant.Smoke]: 'cs-button--smoke',
};

const Button = ({
  children,
  className = '',
  color = ButtonColorVariant.Regular,
  kind = ButtonKindVariant.Regular,
  size = ButtonSizeVariant.Regular,
  ...rest
}) => {
  const classes = classnames(
    'cs-button',
    ButtonColorClasses[color],
    ButtonKindClasses[kind],
    ButtonSizeClasses[size],
    className
  );

  return (
    <button className={classes} {...rest}>
      <span>{children}</span>
    </button>
  );
};

export default Button;

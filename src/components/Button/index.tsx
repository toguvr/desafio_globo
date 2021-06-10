import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import Loader from 'react-loader-spinner';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  disabled?: boolean;
  transparent?: boolean;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  size?: string;
  buttonType?: string;
  type?: string;
  width?: string;
  icon?: React.ComponentType<IconBaseProps>;
};

const Button: React.FC<ButtonProps> = ({
  children,
  transparent,
  color,
  disabled,
  backgroundColor = 'var(--blue)',
  borderColor = 'var(--blue)',
  width,
  loading,
  type,
  icon: Icon,
  ...rest
}) => (
  <Container
    transparent={transparent}
    width={width || '296px'}
    borderColor={borderColor || 'var(--blue)'}
    color={color || '#fff'}
    backgroundColor={backgroundColor || 'var(--blue)'}
    type={type || 'button'}
    disabled={disabled}
    {...rest}
  >
    {loading ? (
      <Loader type="Audio" color="var(--white)" height={16} width={16} />
    ) : (
      children
    )}
  </Container>
);

export default Button;

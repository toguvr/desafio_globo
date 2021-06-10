import React, { useState, useCallback, SelectHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons/lib/cjs';
import { FiAlertCircle } from 'react-icons/fi';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  value: any;
  maxWidth?: string;
  margin?: boolean;
  containerStyle?: object;
  error?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Select: React.FC<SelectProps> = ({
  containerStyle,
  name,
  children,
  maxWidth,
  margin = true,
  error = '',
  value = '',
  icon: Icon,
  ...rest
}) => {
  const [isFocused, setFocused] = useState(false);
  const [isFilled, setFilled] = useState(false);

  const handleIinputFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleIconColor = useCallback(() => {
    setFocused(false);
    setFilled(!!value);
  }, [value]);

  return (
    <Container
      style={containerStyle}
      erroMsg={!!error}
      isFilled={isFilled}
      maxWidth={maxWidth}
      isFocused={isFocused}
      data-testid="input-container"
    >
      {Icon && <Icon size={20} />}
      <select
        value={value}
        name={name}
        onFocus={handleIinputFocus}
        onBlur={handleIconColor}
        {...rest}
      >
        {children}
      </select>
      {error && <FiAlertCircle size={20} color="var(--red)" />}
    </Container>
  );
};

export default Select;

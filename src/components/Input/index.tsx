import React, { InputHTMLAttributes } from 'react';

import { MdErrorOutline } from 'react-icons/md';
import { Container, InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  value?: any;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  placeholderColor?: string;
  maxWidth?: string;
  margin?: string;
  backgroundColor?: string;
  borderColor?: string;
  ref?: any;
  error?: string;
  icon?: any;
  onChange?(e: any): void;
}

const Input: React.FC<InputProps> = ({
  backgroundColor,
  name,
  type,
  placeholder,
  placeholderColor,
  ref,
  borderColor,
  color,
  maxWidth,
  maxLength,
  margin,
  error = '',
  value = '',
  icon: Icon,
  onChange,
  ...rest
}) => {
  return (
    <InputContainer margin={margin} maxWidth={maxWidth}>
      <Container
        maxWidth={maxWidth}
        error={!!error}
        data-testid="input-container"
        placeholderColor={placeholderColor || '#BDBDBD'}
        backgroundColor={backgroundColor || 'var(--gray-900)'}
        borderColor={value ? borderColor || 'var(--blue)' : 'transparent'}
        color={color || 'var(--white)'}
      >
        <input
          placeholder={placeholder}
          value={value}
          ref={ref}
          type={type}
          maxLength={maxLength}
          name={name}
          onChange={onChange}
          {...rest}
        />
        {error ? <MdErrorOutline size={20} color="var(--red)" /> : Icon && Icon}
        {maxLength && (
          <span>
            {value?.length}/{maxLength}
          </span>
        )}
      </Container>
      {error && <span>{error}</span>}
    </InputContainer>
  );
};

export default Input;

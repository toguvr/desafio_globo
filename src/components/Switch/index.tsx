import React from 'react';

import './styles.css';

interface InputProps {
  checked: boolean;
  isDisabled?: boolean;
  onClick(): void;
}

const Switch: React.FC<InputProps> = ({ isDisabled, checked, onClick }) => {
  return (
    <label className="switch">
      <input
        onClick={onClick}
        disabled={isDisabled}
        checked={checked}
        type="checkbox"
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;

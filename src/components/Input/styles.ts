import styled from 'styled-components';

interface ContainerProps {
  maxWidth?: string;
  backgroundColor?: string;
  placeholderColor?: string;
  borderColor?: string;
  margin?: string;
  error?: boolean;
  icon?: boolean;
}
interface InputContainerProps {
  maxWidth?: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '')};
  width: 100%;
  margin: ${(props) => (props.margin ? props.margin : '')};

  > span {
    color: #dd5a5a;
    margin-top: 4px 0;
    //styleName: 12pt - Medium;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const Container = styled.div<ContainerProps>`
  background: ${(props) => props.backgroundColor};
  border-radius: 8px;
  border: 2px solid;
  border-color: ${(props) => (props.error ? '#DD5A5A' : props.borderColor)};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '')};
  padding: 10px 16px;
  width: 100%;

  display: flex;
  align-items: center;

  > span {
    color: #bdbdbd;
    //styleName: 16pt - Medium;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
  }

  > img {
    height: 24px;
    width: 24px;
    margin-left: 16px;
  }

  input {
    width: 100%;
    border: 0;
    height: 24px;
    //styleName: 16pt - Medium;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

    background: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    :disabled {
      color: #bdbdbd;
    }
    ::placeholder {
      color: ${(props) => props.placeholderColor};
    }

    :-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px ${(props) => props.backgroundColor} inset;
    }

    /* Cor do texto do autocomplete */
   :-webkit-autofill {
      -webkit-text-fill-color: ${(props) => props.color}; !important;
    }
  }
`;

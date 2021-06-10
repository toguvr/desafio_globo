import styled, { createGlobalStyle } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

:root {
  --white: #fff;

  --pink: #d53f8c;

  --blue: #008ffb;

  --purple: #805ad5;

  --red: #DD5A5A;

  --gray-50: #eeeef2;
  --gray-100: #d1d2dc;
  --gray-200: #b3b5c6;
  --gray-300: #9699b0;
  --gray-400: #797d9a;
  --gray-500: #616480;
  --gray-600: #4b4d63;
  --gray-700: #353646;
  --gray-800: #1f2029;
  --gray-900: #181b23;

  --cyan-500: #61dafb;
  --yellow-500: #eba417;

  --main-purple: #161933;
  --main-purple-50: #8ba0d2;
  --main-purple-100: #8ba1d2;
  --main-purple-150: #617093;

  --light-blue: #e7ecf6;
  --light-blue-50: #212e51;

  --weird-gray: #aeafb1;
  --weird-gray-50: #bcc0ca;
}

  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;


    ::-webkit-scrollbar {
        width: 7px;
        height: 7px;
      }

      ::-webkit-scrollbar-track {
        border-radius: 8px;
        background: #D1C0FC;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: #6931f4;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #6931f4;
      }
  }

  body{
    background: var(--gray-900);
    color: var(--gray-500);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Poppins', serif;
  }

  h1,h2,h3,h4,h5,h6,strong {
    font-weight: 500;
    font-family: Poppins;
  }

  button{
    cursor: pointer;
  }

  .slick-slide {
    margin-right: 20px;
  }

  .slick-track {
    display: flex;
  }
`;

interface EmptyProps {
  max?: string;
}

export const EmptyContainer = styled.div<EmptyProps>`
  height: 100%;
  display: flex;
  margin: auto;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  > span {
    color: #969696;
    font-size: 12px;
    text-align: center;
    margin-top: 32px;
    max-width: ${(props) => (props.max ? props.max : '256px')};
  }
`;

export const ToastContainerStyled = styled(ToastContainer)`
  margin-top: 80px;
  padding: 0 16px;
  .Toastify__toast--info {
    background: '#232746';
  }

  .Toastify__toast--success {
    background: '#2DB350';
  }

  .Toastify__toast--warning {
    background: '#EBA41D';
  }

  .Toastify__toast--error {
    background: '#FF595C';
  }
`;

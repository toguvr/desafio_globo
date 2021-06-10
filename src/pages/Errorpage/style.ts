import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 42px;
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
    color: #6931f4;
    margin-top: 56px;

    @media (max-width: 350px) {
      margin-top: 32px;
    }
  }

  p {
    max-width: 400px;
    width: 296px;
    height: 72px;
    font-weight: 300;
    font-size: 16px;
    margin-top: 8px;
    text-align: center;
    margin-top: 16px;
    color: #969696;

    @media (max-width: 350px) {
      margin: 16px 32px 0px 32px;
    }
  }

  button {
    margin-top: 34px;
    font-size: 16px;
    font-weight: 700;
    @media (max-width: 350px) {
      margin: 16px 32px 8px 32px;
    }
  }
`;

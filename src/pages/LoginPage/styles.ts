import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 16px;

  > form {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    max-width: 360px;
    background: var(--gray-800);
    padding: 32px;
    border-radius: 8px;

    flex-direction: column;

    > h2 {
      color: var(--white);
      align-self: center;
      margin-bottom: 32px;
    }

    > button {
      margin-top: 24px;
    }
  }
`;

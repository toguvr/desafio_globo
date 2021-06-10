import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1480px;
  height: 80px;

  margin-inline-start: auto;
  justify-content: space-between;
  margin-inline-end: auto;
  margin-top: 16px;
  padding-inline-start: 24px;
  padding-inline-end: 24px;
  .logo {
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
      svg {
        display: none;
      }
    }

    > h1 {
      margin-left: 16px;
      color: var(--white);
      font-size: 30px;

      > span {
        color: var(--blue);
      }
    }
  }

  .profile {
    display: flex;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;
      margin-right: 16px;
      text-align: right;
      @media (max-width: 768px) {
        display: none;
      }
      > p {
        font-weight: bold;
        color: var(--gray-200);
      }

      > span {
        color: var(--gray-300);
      }
    }
  }
`;

import styled from 'styled-components';

interface CircleProps {
  color: string;
}

export const Circle = styled.div<CircleProps>`
  border-radius: 50%;
  color: var(--white);
  background: ${(props) => props.color || 'var(--white)'};
  width: 100px;
  height: 100px;
  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  margin: auto;

  align-self: center;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;

  .content {
    display: flex;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 24px;
    max-width: 1480px;
    margin-inline-start: auto;
    margin-inline-end: auto;
    padding: 24px;
    @media (max-width: 768px) {
      padding: 0;
    }
  }

  .grid {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    flex: 1;
  }

  .box {
    padding: 32px;
    background: var(--gray-800);
    border-radius: 8px;
    min-height: 266px;
    > span {
      font-size: 18px;
      margin-bottom: 16px;
    }

    .status {
      width: 100%;
      height: calc(100% - 32px);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

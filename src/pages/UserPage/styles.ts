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
    padding: 16px;
    background: var(--gray-800);
    border-radius: 8px;
    min-height: 266px;

    @media (min-width: 768px) {
      padding: 32px;
    }

    > div {
      margin-bottom: 32px;
      display: flex;
      justify-content: space-between;

      > span {
        font-size: 30px;
        color: var(--white);
      }
    }

    > table {
      font-variant-numeric: lining-nums tabular-nums;
      border-collapse: collapse;
      width: 100%;
      > thead {
        > tr {
          font-variant-numeric: lining-nums tabular-nums;
          border-collapse: collapse;

          > th {
            font-weight: bold;
            text-transform: uppercase;
            padding: 12px;

            text-align: start;

            padding-inline-start: 16px;

            padding-inline-end: 16px;
            padding-top: 12px;
            padding-bottom: 12px;
            line-height: 16px;
            font-size: 12px;
            color: var(--gray-300);
            border-bottom: 1px;
            border-color: var(--gray-100);
          }
        }
      }
      > tbody {
        > tr {
          & + tr {
            border-top: 1px solid var(--gray-700);
          }
          font-variant-numeric: lining-nums tabular-nums;
          border-collapse: collapse;

          > td {
            font-variant-numeric: lining-nums tabular-nums;
            border-collapse: collapse;
            padding: 16px 12px;
            width: 100%;

            @media (max-width: 768px) {
              > p {
                max-width: 160px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
            }

            @media (max-width: 325px) {
              > p {
                max-width: 100px;
              }
            }

            div {
              display: flex;
              align-items: center;
              svg {
                & + svg {
                  margin-left: 16px;
                }
              }
            }
          }
        }
      }
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

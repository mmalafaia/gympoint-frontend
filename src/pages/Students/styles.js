import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  max-height: 542px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      align-self: center;
    }

    div {
      display: flex;
      height: 56px;
      padding: 10px;
      justify-content: right;

      button {
        width: 142px;
        height: 36px;
        background: #ee4d64;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
      }

      input {
        width: 237px;
        padding-left: 40px;
        margin-left: 10px;
        border-radius: 4px;
        border: 1px solid #eee;
      }
    }
  }

  > div {
    width: 100%;
    background: #fff;

    table {
      padding: 30px;
      width: 100%;
      margin-top: 30px;
      text-align: left;

      td {
        height: 52px;
        font-size: 16px;
        border-bottom: 1px solid #eee;
      }

      > td {
        width: 50%;
      }
    }
  }
`;

export const ButtonEdit = styled.button`
  background: none;
  border: none;
  color: #4d85ee;
  padding: 10px;
`;

export const ButtonDelete = styled.button`
  background: none;
  border: none;
  color: #de3b3b;
`;

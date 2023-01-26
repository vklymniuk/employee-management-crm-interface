import styled from 'styled-components';

const ActionLogCard = styled.div`
  .cardTitle {
    font-size: 1.5rem;
    display: flex;
  }

  .displayTable {
    display: table;
    table-layout: fixed;
    width: 70%;
  }

  .displayTable > div {
    display: table-row;
    height: 39px;
    > div {
      vertical-align: middle;
      display: table-cell;
    }

    div:last-child {
      font-weight: bold;
      margin: 0;
    }
  }

  .changes{
    display: flex;
    align-items: center;
    margin-left: 10px;

    > span {
      margin-right: 2px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .whereCollection {
      margin-left: 2px;
    }
  }
`;

export default ActionLogCard;
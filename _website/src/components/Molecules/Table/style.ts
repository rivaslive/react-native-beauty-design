import styled from 'styled-components';

export const StyleContent = styled.div`
  .ant-table-content {
    overflow-x: auto;
  }

  .ant-table-container table > thead > tr:first-child th:first-child {
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
  }

  .ant-table-container table > thead > tr:last-child th:last-child {
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
  }

  .ant-table-container table > tbody {
    td:first-child {
      font-weight: 600;
    }
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background-color: transparent;
  }

  .ant-table-thead > tr > th {
    border-bottom: none;
    background-color: rgb(244, 244, 244);
    color: rgb(136, 136, 136);
    padding: 0 15px 0;
    font-size: 0.8rem;
    font-weight: 600;
    height: 46px;

    &:before {
      display: none;
    }
  }
`;

import styled from 'styled-components';
import { palette } from 'styled-theme';

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .isoChartControl {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: inherit;
    margin-bottom: 20px;

    span {
      font-size: 13px;
      color: ${palette('text', 1)};
      font-weight: 400;
      margin-right: 15px;
      margin-left: inherit;
    }

    button {
      border: 1px solid ${palette('border', 0)};
      padding: 0 10px;
      border-radius: 0;
      position: relative;

      span {
        margin: 0;
      }

      &:last-child {
        margin-left: -1px;
        margin-right: inherit;
      }

      &:hover {
        color: ${palette('primary', 0)};
        border-color: ${palette('primary', 0)};
        z-index: 1;

        span {
          color: ${palette('primary', 0)};
        }
      }
    }
  }
`;

export default ChartWrapper;
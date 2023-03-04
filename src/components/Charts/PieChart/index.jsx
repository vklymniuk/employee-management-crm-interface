import React from 'react';
import Async from 'helpers/asyncComponent';

import ChartWrapper from '../chart.style';

const PieChart = props => (
  <ChartWrapper>
    <Async load={import(/* webpackChunkName: "googleChart" */ 'react-google-charts')} componentProps={props} componentArguement="googleChart" />
  </ChartWrapper>
);

export default PieChart;
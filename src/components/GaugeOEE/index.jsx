import React from 'react';
import Chart from 'react-google-charts';

export const GaugeOEE = ({oee}) => {
  const data = [
    ['Label', 'Value'],
    ['OEE %', oee],
  ];

  const options = {
    width: 120,
    height: 120,
    redFrom: 0,
    redTo: 60,
    yellowFrom: 60,
    yellowTo: 85,
    greenFrom: 85,
    greenTo: 100,
    minorTicks: 5,
    animationDuration: 1,
  };

  return (
    <Chart
      chartType="Gauge"
      data={data}
      options={options}
      width="100%"
      height="auto"
      legendToggle
    />
  );
};
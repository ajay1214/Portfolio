import React from "react";
import { Chart } from "react-google-charts";
import "../index.css";

export default function Charts(props) {
  return (
    <Chart className="chart" chartType="ColumnChart" width="auto" height="auto" data={props.data} />
  );
}
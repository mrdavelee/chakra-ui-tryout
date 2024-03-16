import React from "react";
import ReactApexChart from "react-apexcharts";
import { lineChartOptions } from "../variables/charts";

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartOptions: {},
    };
  }

  componentDidMount() {
    const optionsData = this.props.yAxisData; // Accessing props directly here
    const modifiedOptions = {
      ...lineChartOptions,
      yaxis: {
        ...lineChartOptions.yaxis,
        max: optionsData.max,
        min: optionsData.min,
      },
    };
    this.setState({
      chartOptions: modifiedOptions,
    });
  }
  
  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.props.data}
        type="area"
        width="100%"
        height="100%"
      />
    );
  }
}

export default LineChart;

import React from "react";
import ReactApexChart from "react-apexcharts";
import { lineChartOptions } from "../variables/charts";

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // chartData: props.data, // Set chartData using props
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartOptions: lineChartOptions,
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

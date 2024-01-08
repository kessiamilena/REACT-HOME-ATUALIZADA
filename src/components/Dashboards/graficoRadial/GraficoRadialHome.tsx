import React from "react";
import ReactApexChart from "react-apexcharts";

export default class GraficoRadialHome extends React.Component {
    constructor(props: {any}) {
      super(props);

      this.state = {
      
        series: [70],
        options: {
          chart: {
            // height: 50,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70%',
              }
            },
          },
          labels: ['Cricket'],
        },
      
      
      };
    }

  

    render() {

      return (

        <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={50} width={50}/>
        </div>

      );
    }
  }
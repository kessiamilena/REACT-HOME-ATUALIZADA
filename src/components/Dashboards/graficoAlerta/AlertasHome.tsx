import React, { Component } from 'react';
import Chart from 'react-apexcharts'

import "../graficoAlerta/style.css"

class AlertasHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['Alertas de Erros Resolvidos', 'Alertas de Erros Não Resolvidos', 'Alertas de Erros em Andamento']
      },
      series: [44, 55, 41],
      labels: ['Alertas de Erros Resolvidos', 'Alertas de Erros Não Resolvidos', 'Alertas de Erros em Andamento']
    }
  }

  render() {

    return (
      <div className="donut">
        <h2>Alertas - Status Mensal</h2>
        <Chart options={this.state.options} series={this.state.series} type="donut" width="500" />
      </div>
    );
  }
}

export default AlertasHome;
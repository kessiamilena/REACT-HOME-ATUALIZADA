import axios from "axios";
import React, { Component, createContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";

import "../graficoErro/style.css"

// type ContagemAno = {
//     erroList: [
//       ano : number,
//       contagem : number
//     ]
// }

// export const Ano = createContext({} as ContagemAno );

function ErrosHome(props) {
// function ErrosHome() {
  console.log("Aqui está a props: " + JSON.stringify(props.anoList))

  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      // categories: [10,20,30]
      categories: props.anoList
      // categories: [props.data_erro]
    }
  };
  const series = [
    {
      name: "series-1",
      data: [10,20,30]
      // data: [k]
    }
  ];


  return (
    <div className="app">
      <h2>Erros notificados por período</h2>
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="bar"
            width="500" />
        </div>
      </div>
    </div>
  );
}


export default ErrosHome;


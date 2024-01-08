import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Chart from "react-apexcharts";

import "../graficoErro/style.css"

function ErrosHome(props) {
// function ErrosHome() {
  console.log("Aqui está a props: " + JSON.stringify(props.contagemList))
  
  const [contagem, setContagem] = useState([]);
  
  console.log(contagem)

useEffect(()  => {


props.erroList.forEach((value) => {
  // console.log("value: " + JSON.stringify(value.contagem))

  console.log("value: " + value)
  contagem.push(JSON.stringify(value.contagem))
  
}) 


console.log(contagem)

}, []);
//   function pegarValores () {

//     props.erroList.forEach(value => {
//     // console.log("index: " + index)
//     console.log("value: " + JSON.stringify(value))
    
//     let anoLista = JSON.stringify(value.ano)
//     let contagemLista = JSON.stringify(value.contagem)
//     return contagemLista
//   })

// }

// console.log("VALORES: " + pegarValores())

  // const anos = [props.anoList].forEach(element => {
  //   let ano = [];
  //   ano.push(element);
  // });

  // console.log("ano" + anos);

  // console.log("erro " + JSON.stringify(props.anoList));
  // console.log("ano " + [props.anoList]);

  // const state = {
  //     erro : [],
  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: props.anoList
      // categories: [props.data_erro]
    }
  };
  const series = [
    {
      name: "series-1",
      data: props.contagemList
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


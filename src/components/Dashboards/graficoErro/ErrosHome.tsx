import { useEffect } from "react";
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

useEffect(() => {
  // Atualiza o título do documento usando a API do browser
  console.log("Aqui está a props: " + JSON.stringify(props.anoList))
  
}, [props]);

  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: props.anoList
    }
  };
  const series = [
    {
      name: "series-1",
      data: [10,20]
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


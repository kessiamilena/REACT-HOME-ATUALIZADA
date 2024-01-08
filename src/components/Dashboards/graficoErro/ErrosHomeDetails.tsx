// import React, { Component } from "react";
// import Chart from "react-apexcharts";
// import "../graficoErro/style.css";
// import { obterDadosDaAPI } from "../../../utils/api";

// class Erros extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: "basic-bar",
//         },
//         xaxis: {
//           categories: [], // Inicialmente vazio, será preenchido com dados da API
//         },
//       },
//       series: [
//         {
//           name: "series-1",
//           data: [], // Inicialmente vazio, será preenchido com dados da API
//         },
//       ],
//     };
//   }

//   async componentDidMount() {
//     try {
//       const dadosAPI = await obterDadosDaAPI();

//       this.setState({
//         options: {
//           ...this.state.options,
//           xaxis: {
//             ...this.state.options.xaxis,
//             categories: dadosAPI.nomeerro,
//           },
//         },
//         series: [
//           {
//             ...this.state.series[0],
//             data: dadosAPI.data_erro,
//           },
//         ],
//       });
//     } catch (error) {
//       // Lidar com erros, se necessário
//       console.error("Erro ao obter dados da API:", error);
//     }
//   }

//   render() {
//     return (
//       <div className="app">
//         <h2>Erros notificados por período</h2>
//         <div className="row">
//           <div className="mixed-chart">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="bar"
//               width="500"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Erros;


import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Chart from "react-apexcharts";

import "../graficoErro/style.css"

class ErrosHomeDetails extends React.Component {

  constructor(props: {
    erroList: erro, anoList//, contagemList
}) {
    //, erroList = {erro}
    // props.map( (item: any, indice: any) => {

    // })
    super(props);
    
   const anos = [props.anoList].forEach(element => {
      let ano = [];
      ano.push(element);
    });
    
    console.log("ano" + anos)
    
    console.log("erro " + JSON.stringify(props.anoList))
    console.log("ano " + [props.anoList])

    this.state = {
      erro : [],
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [props.anoList]
          // categories: [props.data_erro]
        }
      },
      series: [
        {
          name: "series-1",
          data: [10, 20, 30]
          // data: [k]
        }
      ]
    };
  }

  render() 
  {
    console.log(this.props)

    return (
      <div className="app">
        <h2>Erros notificados por período</h2>
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}



export default ErrosHomeDetails;

// erros.tsx
// import React, { useEffect, useState } from 'react';
// import ApexCharts from 'react-apexcharts';
// import { obterDadosDaAPI } from '../../../utils/api';

// const Erros = () => {
//   const [dadosDoGrafico, setDadosDoGrafico] = useState<any>({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const dadosAPI = await obterDadosDaAPI();

//         // Manipule os dados conforme necessário para o gráfico
//         const dadosFormatados = {
//           series: [{
//             name: 'Datas',
//             data: dadosAPI.data_erro // Substitua 'dados' pelo nome do campo que contém seus dados
//           }],
//           chart: {
//             type: 'bar', // ou o tipo de gráfico desejado
//             height: 350
//           },
//           xaxis: {
//             categories: dadosAPI.nomeerro // Substitua 'categorias' pelo nome do campo que contém suas categorias
//           }
//         };

//         setDadosDoGrafico(dadosFormatados);
//       } catch (error) {
//         // Lidar com erros, se necessário
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <ApexCharts options={dadosDoGrafico.chart} series={dadosDoGrafico.series} type={dadosDoGrafico.chart.type} height={dadosDoGrafico.chart.height} />
//     </div>
//   );
// };

// export default Erros;

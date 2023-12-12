// import axios from 'axios';

// const api = axios.create({
//     // baseURL: "http://localhost:3000/",

//     var GetInfos = (setState) => {
//     axios.get(`http://localhost:3000/`)
//     .then((response) => {
//         setState(response.data.results)
//     }).catch((error) => {
//         console.log(error)
//     })
// }


// })



// export default api

// api.ts
import axios from 'axios';

const apiUrl = 'http://localhost:3000/';

export const obterDadosDaAPI = async () => {
  try {
    const response = await axios.get(apiUrl);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
    throw error;
  }
};


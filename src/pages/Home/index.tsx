import Header from "../../components/Header"
import MenuLateral from "../../components/MenuLateral"
import ErrosHome from "../../components/Dashboards/graficoErro/ErrosHome"
import "./style.css"

import IconeErro from "../../assets/img/erros-icon.png"
import IconeErrosCorrigidos from "../../assets/img/checked-icon.png"
import IconeAlertas from "../../assets/img/alerta-icon.png"
import IconeEstrategias from "../../assets/img/strategy-icon.png"
import IconeContato from "../../assets/img/icon-contact.png"
import IconeChat from "../../assets/img/icon-chat.png"

import { useEffect, useState } from "react"
import AlertasHome from "../../components/Dashboards/graficoAlerta/AlertasHome"
import axios from "axios"
import LinhaHome from "../../components/Dashboards/graficoLinha/Linha"
import useAlerta from "../../hooks/UseAlerta"



export default function Home() {

    // const { alerta } = useAlerta()
    const [erro, setErro] = useState([]);
    const [anoGraf, setAnoGraf] = useState([]);
    const [contagemItem, setContagemItem] = useState([]);

useEffect(()  => {
     axios
        .get("http://localhost:8080/erro")
        // .then((response) => setErro(response.data))
        .then((response) => {
            response.data.map( (item: any, indice: any) => {
                let positionError = erro.findIndex( er => er.ano == item.data_erro.split(`-`)[0]);

                if( positionError != -1){
                    // contagemItem.push(erro[ positionError ].contagem += 1)
                    erro[ positionError ].contagem += 1
                    
                    
                    
                }else{
                    erro[ erro.length ] = {
                        ano : item.data_erro.split(`-`)[0],
                        // ano : erro[item.data_erro.split(`-`)[0]],
                        contagem : 1
                    }
                }
             
                
                //continuar o raciocionio aqui
                // setAnoGraf(erro[item].ano)
                // console.log("anoGraf: " + anoGraf)
                // console.log("ErroDoElse: " + JSON.stringify(erro))
                // setAnoGraf(erro[item].ano)
                // setAnoGraf(erro[item].ano)
                // setContagemItem(erro[item].contagem)
                
                anoGraf.push(erro[indice].ano)
                console.log("erro" + JSON.stringify(erro))
                console.log("anoGraf: " + anoGraf)
                console.log("contagemItem: " + contagemItem)
            })
        })
        .catch((error) => console.log(error))
        .finally;
    }, []);

    return (
        <>
            <MenuLateral/>
            <main className="mainHome">
                <Header/>
                <section className="section-main">
                    <div className="banner-main">
                    </div>
                    <div className="lista-quantidades">
                        <div className="cards-iniciais">
                            <div className="card-inicial">
                                <img src={ IconeErro } alt="Icone de erro" />
                                <div className="quantidade">
                                    <span>Quantidade de Erros</span>
                                    <p>10</p>
                                </div>
                            </div>
                            <div className="card-inicial">
                                <img src={ IconeErrosCorrigidos } alt="Icone de erros corrigidos" />
                                <div className="quantidade">
                                    <span>Erros Corrigidos</span>
                                    <p>10</p>
                                </div>
                            </div>
                            <div className="card-inicial">
                                <img src={ IconeAlertas } alt="Icone de alertas" />
                                <div className="quantidade">
                                    <span>Quantidade de Alertas</span>
                                    <p>10</p>
                                </div>
                            </div>
                            <div className="card-inicial">
                                <img src={ IconeEstrategias } alt="Icone de estratégias" />
                                <div className="quantidade">
                                    <span>Quantidade de Estratégias</span>
                                    <p>10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="centro">
                        <div className="centro-um">
                            <LinhaHome/>
                            <div className="linha"></div>
                            <div className="cards-meio">
                                <div className="card-meio">
                                <img src={ IconeContato } alt="Icone de agenda de contato" />
                                    <h3>Contatar planta</h3>
                                    <p>fale com algum responsável que esteja disponível.</p>
                                </div>
                                <div className="card-meio">
                                    <img src={ IconeChat } alt="Icone de chat" />
                                    <h3>Chat com analista</h3>
                                    <p>entre em contato com analistas que estejam disponíveis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="centro-dois">
                            <ErrosHome erroList={erro} anoList={anoGraf} contagemList={contagemItem}/>
                            <div className="linha"></div>
                            <AlertasHome/>
                            
                            {/* centro-dois */}
                        </div>
                    </div>
                <section className="container-alertas">
                    <h2>Alertas Registrados</h2>
                    <table>
                        <caption>Alertas de erros</caption>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Status</th>
                                <th>Data</th>
                                <th>Nível de criticidade</th>
                                <th>Identificador do erro relacionado</th>
                            </tr>
                        </thead>
                        <tbody id="corpo-tabela">

                             {/* <tr>
                                <td data-cell="nome">{alerta.nomealerta}</td>
                                <td data-cell="altura">1.78</td>
                                <td data-cell="peso">67</td>
                                <td data-cell="valor do IMC">21.1</td>
                                <td data-cell="classificação do IMC">Normal</td>
                                <td data-cell="data de cadastro">19/06/2023 21:27</td>
                            </tr>              */}
                        </tbody>
                    </table>
                </section>
                </section>
            </main>
        </>
    )
}
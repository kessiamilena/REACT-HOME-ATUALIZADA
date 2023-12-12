import Header from "../../components/Header"
import MenuLateral from "../../components/MenuLateral"
import ErrosHome from "../../components/Dashboards/graficoErro/ErrosHome"
import "./style.css"

import IconeErro from "../../assets/img/erros-icon.png"
import IconeErrosCorrigidos from "../../assets/img/checked-icon.png"
import IconeAlertas from "../../assets/img/alerta-icon.png"
import IconeEstrategias from "../../assets/img/strategy-icon.png"
import IconeChat from "../../assets/img/icon-chat.png"
import IconeContato from "../../assets/img/icon-contact.png"

import axios from "axios"
import { useEffect, useState } from "react"
import AlertasHome from "../../components/Dashboards/graficoAlerta/AlertasHome"



export default function Home() {

    const [erro, setErro] = useState({});

    useEffect(()  => {
        axios
            .get("http://localhost:8080/erro")
            .then((response) => console.log(response.data)) // setErro(response.data))
            .catch((error) => console.log(error))
            .finally;
    }, []);

    return (
        <>
            <MenuLateral/>
            <main className="mainHome">
                <Header/>
                <section className="section-main">
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
                        <ErrosHome erroList = {erro}/>
                        <div className="linha"></div>
                        {/* <div className="cards-meio">
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
                        </div> */}
                        <AlertasHome/>
                        </div>
                        <div className="centro-dois">
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
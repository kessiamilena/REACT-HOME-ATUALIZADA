import Header from "../../components/Header"
import MenuLateral from "../../components/MenuLateral"
import Erros from "../../components/Dashboards/graficoErro/Erros"
import "./style.css"

import IconeErro from "../../assets/img/erros-icon.png"
import IconeErrosCorrigidos from "../../assets/img/checked-icon.png"
import IconeAlertas from "../../assets/img/alerta-icon.png"
import IconeEstrategias from "../../assets/img/strategy-icon.png"



export default function Home() {


    return (
        <>
            <MenuLateral/>
            <main className="mainHome">
            <Header/>
                
                <section className="principal-home">
                    <div className="centro">
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
                    <div className="centro-lados">
                    <Erros/>
                        <div className="lado-um">
                            <div className="plantaMain">
                                <span>Planta Curitiba</span>
                                <div className="imagens-plantaMain">
                                    {/* <img src={ CarroVermelho } alt="Imagem de um carro vermelho"/>
                                    <img src={ PainelCarro } alt="Imagem de Painel do carro"/> */}
                                </div>
                            </div>
                            <div className="plantaMain">
                                <span>Planta Taubaté</span>
                                <div className="imagens-plantaMain">
                                    {/* <img src={ CarroPreto } alt="Imagem de um carro preto"/>
                                    <img src={ PainelCarro } alt="Imagem de Painel do carro"/> */}
                                </div>
                            </div>
                            <div className="plantaMain">
                                <span>Planta Anchieta</span>
                                <div className="imagens-plantaMain">
                                    {/* <img src={ CarroAzul } alt="Imagem de um carro azul"/>
                                    <img src={ PainelCarro } alt="Imagem de Painel do carro"/> */}
                                </div>
                            </div>
                            <div className="graficos">
                                <div>
                                    <div className="grafico">
                                        <span>Parada Total da Linha de Produção</span>
                                        {/* <img className="grafico-img" src={ GraficoLinha } alt="Imagem de Gráfico Linha"/> */}
                                    </div>
                                    <div className="grafico">
                                        <span>Principais erros - Anual</span>
                                        {/* <img className="grafico-img" src={ GraficoBarras } alt="Imagem de Gráfico de Setores"/> */}
                                    </div>
                                </div>
                                <div>
                                    <div className="grafico">
                                        <span>Principais erros - Mensal</span>
                                        {/* <img className="grafico-img" src={ GraficoSetores } alt="Imagem de Gráfico de Setores"/> */}
                                    </div>
                                    <div className="grafico">
                                        {/* <img className="plus-add" src={ IconePlusAdd } alt="Icone para adicionar arquivos"/> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lado-dois">
                            <div className="infos">
                                <div className="infos-cards">
                                    <div className="info">
                                        <div>
                                            <span>Produção</span>
                                            {/* <img src={ IconePorcentagem } alt="Icone de porcentagem"/> */}
                                        </div>
                                        <span className="onibus">Ônibus</span>
                                        <p>+ 500 mil uidades produzidas em Taubaté</p>
                                    </div>
                                    <div className="info icone-porcent">
                                        <div>
                                            <span>Alerta de desempenho:</span>
                                            {/* <img src={ IconeQPorcentagem } alt="Icone de porcentagem"/> */}
                                        </div>
                                        <p>Desempenho abaixo do esperado</p>
                                    </div>
                                </div>
                                <div className="infos-cards">
                                    <div className="info icone-alerta">
                                        <div>
                                            <span>Alerta de segurança:</span>
                                            {/* <img src={ IconeAlerta } alt="Icone Alerta"/> */}
                                        </div>
                                        <p>Sistema comprometido por uma ameaça de segurança</p>
                                    </div>
                                    <div className="info">
                                        <div>
                                            <span>Produção</span>
                                            {/* <img src={ IconePorcentagem } alt="Icone de porcentagem"/> */}
                                        </div>
                                        <span className="onibus">Ônibus</span>
                                        <p>+ 500 mil uidades produzidas em Taubaté</p>
                                    </div>
                                </div>
                                {/* <img className="grafico-central" src={ GraficoCentral } alt="Imagem de Gráfico"/> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
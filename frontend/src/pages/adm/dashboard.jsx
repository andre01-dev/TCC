import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./dashboard.scss";
import CabecalhoADM from "../../components/cabecalhoadm/cabecalhoadm";
import { Link } from "react-router"
import '/src/assets/fonts/fonts.scss'


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function RelatorioGeralCursos() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function carregarTodosRelatorios() {
      const endpoints = [
        "fakenews",
        "comprasonline",
        "pagamentosseguros",
        "organizacaodigital",
        "criandoeusandoemail",
        "introducaoeinteligenciaartificial",
        "educacacofinanceiradigital",
        "senhasseguras",
        "golpes",
      ];

      try {
        const respostas = await Promise.all(
          endpoints.map((e) =>
            fetch(`http://localhost:5010/curso/relatorio/${e}`).then((res) =>
              res.json()
            )
          )
        );
        setDados(respostas);
      } catch (erro) {
        console.error("Erro ao carregar relatórios:", erro);
      }
    }

    carregarTodosRelatorios();
  }, []);

  if (dados.length === 0) {
    return (
      <div className="grafico-container">
        <p className="texto-carregando">Carregando gráfico...</p>
      </div>
    );
  }

  const labels = dados.map((d) => d.curso);
  const data = {
    labels,
    datasets: [
      {
        label: "Cursando",
        data: dados.map((d) => d.cursando),
        backgroundColor: "#003F51", // azul petróleo
        borderRadius: 10,
      },
      {
        label: "Concluído",
        data: dados.map((d) => d.concluido),
        backgroundColor: "#dfb674", // dourado
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Relatório Geral de Cursos",
        color: "#003F51",
        font: { size: 20, weight: "bold" },
        padding: { bottom: 20 },
      },
      legend: {
        position: "bottom",
        labels: {
          color: "#003F51",
          font: { size: 13 },
        },
      },
      tooltip: {
        backgroundColor: "#003F51",
        titleColor: "#F3E7E7",
        bodyColor: "#F3E7E7",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#003F51",
          font: { size: 11 },
        },
        grid: {
          color: "#F3E7E7",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#003F51",
          stepSize: 1,
          font: { size: 11 },
        },
        grid: {
          color: "#F3E7E7",
        },
      },
    },
  };

  return (
    <div>
        <CabecalhoADM />
<div className="container-dashboard">
        <div className="grafico-container">
      <h2 className="titulo-grafico josefin-sans">Relatório de Cursos</h2>
      <div className="grafico-box">
        <Bar data={data} options={options} />
      </div>
      
    </div>
    <div className="divbut">
        <Link to={'/adm'}>
        <button className="josefin-sans"> Voltar Para Página Inicial</button>
    </Link>
    </div>
    </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Conecta from "./Conecta";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Grafico2 = () => {
  const [prods, setProd] = useState([]);

  const getProd = async () => {
    const lista = await Conecta.get("estatistica");
    //    console.log(lista);
    setProd(lista.data);
  };

  // define o método que será executado após renderizar o componente
  useEffect(() => {
    getProd();
  }, []);

  const labels = ['Estatistica'];
  //const labels = prods.map((prod) => prod.nome);
  const data1 = prods.map((prod) => prod.SUM);
  const data2 = prods.map((prod) => prod.AVG);
  const data3 = prods.map((prod) => prod.PROD);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Avg,Sum dos produtos",
      },
    },
  };


  const data = {
    labels,
    datasets: [
      {
        label: 'Soma Total de preços',
        data: data1,
        
        backgroundColor: 'rgba(30, 134, 135, 0.5)',
      },
      {
        label: 'Média Aritmética',
        data: data2,
        backgroundColor: 'rgb(130, 139, 0, 0.5)',
      },
      {
        label: 'Nº Produtos',
        data: data3,
        backgroundColor: 'rgba(251, 59, 0, 0.5)',
      },
    ],
  };

  return (
    <div class="d-flex justify-content-center">
      <div style={{ width: "1000px", height: "800px" }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default Grafico2;

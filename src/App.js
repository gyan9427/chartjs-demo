import './App.css';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Mar', 'May', 'July', 'Oct'],
  datasets: [
    {
      label: 'samsung sales',
      data: [400, 1000, 4000, 800, 1500],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132,0.5)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      pointBorderColor: '#2a8677',
      pointBorderWidth:5,
      tension:0.4,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};


function App() {
  return (
    <div className="App">
      <h1>Monthly sales</h1>
      <div className="chart">
         <Line data={data} options={options}/>
      </div>
      
    </div>
  );
}

export default App;

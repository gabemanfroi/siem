import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Container } from './style';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function Top() {
  const options = {
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    maintainAspectRatio: true,
    aspectRatio: 4,
    responsive: true,
    scales: {
      y: {
        grid: {
          color: 'white',
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1000, 800, 50, 200],
        borderColor: 'red',
        backgroundColor: 'red',
      },
      {
        label: 'Dataset 2',
        data: [700, 350, 120, 275],
        borderColor: 'green',
        backgroundColor: 'green',
      },
      {
        label: 'Dataset 2',
        data: [150, 700, 500, 600],
        borderColor: 'blue',
        backgroundColor: 'blue',
      },
    ],
  };
  return (
    <Container>
      <div>
        <Bar options={options} data={data} />
      </div>
    </Container>
  );
}

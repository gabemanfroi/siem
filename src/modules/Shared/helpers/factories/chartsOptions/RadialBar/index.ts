import { ApexOptions } from 'apexcharts';

const RadialBarOptionsFactory = (options?: ApexOptions): ApexOptions => ({
  chart: {
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          color: '#fff',
        },
        value: {
          color: '#fff',
          formatter(val: number): string {
            return `${val.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}%`;
          },
        },
      },
      hollow: {
        size: '70%',
      },
    },
  },
  ...options,
});

export default RadialBarOptionsFactory;

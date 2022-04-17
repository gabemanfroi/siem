import { ApexOptions } from 'apexcharts';

export const defaultRadialBarOptions: ApexOptions = {
  chart: {
    height: 300,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      track: {
        background: '#cc4455',
      },
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
  grid: {},
  labels: ['Confiabilidade'],
};

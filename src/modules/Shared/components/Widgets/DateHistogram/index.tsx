import Chart from 'react-apexcharts';
import { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import { Skeleton } from '@mui/material';
import { useAppSelector } from '../../../hooks/useAppSelector';

const DateHistogram = () => {
  const { dateHistogram } = useAppSelector(({ dashboard }) => dashboard);
  const [categories, setCategories] = useState<string[]>([]);
  const [series, setSeries] = useState<{ name: string; data?: number[] }[]>([]);

  useEffect(() => {
    if (dateHistogram) {
      const chartDate = {
        categories: [] as string[],
        series: { low: [], high: [], medium: [] } as {
          low: number[];
          medium: number[];
          high: number[];
        },
      };
      dateHistogram.forEach((date) => {
        const createdDate = new Date(date.timestamp);
        chartDate.categories.push(
          `${createdDate.getDate()} - ${createdDate.toLocaleString('pt-BR', {
            month: 'long',
          })}`
        );
        chartDate.series.low.push(date.eventsByLevel.low);
        chartDate.series.medium.push(date.eventsByLevel.medium);
        chartDate.series.high.push(date.eventsByLevel.high);
      });
      setCategories(chartDate.categories);
      setSeries([
        { name: 'Baixo', data: chartDate.series.low },
        { name: 'Médio', data: chartDate.series.medium },
        { name: 'Alto', data: chartDate.series.high },
      ]);
    }
  }, [dateHistogram]);

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: true,
        tools: {
          zoom: true,
          zoomin: true,
        },
      },
      id: 'basic-bar',
      type: 'bar',
      stacked: true,
      stackType: '100%',
    },
    xaxis: {
      categories,
    },
    theme: {
      palette: 'palette3',
    },
    grid: {
      borderColor: '#ffffff22',
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  return (
    <>
      {true && (
        <Skeleton
          variant="rectangular"
          sx={{ flex: 1, borderRadius: '5px' }}
          animation="wave"
        />
      )}
      {false && (
        <Chart
          options={options}
          series={series}
          type="bar"
          width="100%"
          height="100%"
        />
      )}
    </>
  );
};

export default DateHistogram;

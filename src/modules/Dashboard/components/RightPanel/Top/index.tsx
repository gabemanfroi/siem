import Chart from 'react-apexcharts';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import { IconButton, Skeleton, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { MdOutlineFilterAlt } from 'react-icons/md';
import { setFilter } from 'modules/Shared/reducers/filterReducer';
import { useAppDispatch } from 'modules/Shared/hooks/useAppDispatch';
import { useAppSelector } from 'modules/Shared/hooks/useAppSelector';
import { ApexOptions } from 'apexcharts';
import { ptBR } from 'date-fns/locale';
import { Container } from './style';

export default function Top() {
  const { isLoading } = useAppSelector(({ loading }) => loading);
  const { dateHistogram } = useAppSelector(({ dashboard }) => dashboard);
  const [categories, setCategories] = useState<string[]>([]);
  const [series, setSeries] = useState<{ name: string; data?: number[] }[]>([
    { name: 'series-1' },
  ]);

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

  const dispatch = useAppDispatch();
  const [initialDate, setInitialDate] = useState<number | null>(
    new Date().getTime() - 7 * 24 * 60 * 60 * 1000
  );
  const [endDate, setEndDate] = useState<number | null>(new Date().getTime());

  const setFilters = () => {
    if (!initialDate || !endDate) return;
    dispatch(
      setFilter({
        filter: {
          initialDate: new Date(initialDate).getTime(),
          endDate: new Date(endDate).getTime(),
        },
      })
    );
  };

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Início"
            value={initialDate}
            onChange={(newValue) => {
              setInitialDate(newValue);
            }}
          />
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Fim"
            value={endDate}
            onChange={(newValue) => {
              setEndDate(newValue);
            }}
          />
          <IconButton
            aria-label="delete"
            sx={{ color: 'white' }}
            size="large"
            onClick={() => setFilters()}
          >
            <MdOutlineFilterAlt />
          </IconButton>
        </LocalizationProvider>
      </div>
      {isLoading && (
        <Skeleton
          variant="rectangular"
          sx={{ flex: 1, borderRadius: '5px' }}
          animation="wave"
        />
      )}
      {!isLoading && (
        <Chart
          options={options}
          series={series}
          type="bar"
          width="100%"
          height="100%"
        />
      )}
    </Container>
  );
}

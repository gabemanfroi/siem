import Chart from 'react-apexcharts';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import { IconButton, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { MdOutlineFilterAlt } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './style';
import { setFilter } from '../../../../Shared/reducers/filterReducer';

export default function Top() {
  const { dateHistogram } = useSelector(({ metrics }) => metrics);

  useEffect(() => {
    console.log(dateHistogram);
  }, [dateHistogram]);

  const options = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  };

  const series = [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];
  const dispatch = useDispatch();
  const [initialDate, setInitialDate] = useState(
    new Date().getTime() - 7 * 24 * 60 * 60 * 1000
  );
  const [endDate, setEndDate] = useState(new Date().getTime());

  const setFilters = () => {
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
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
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
            color="primary"
            size="large"
            onClick={() => setFilters()}
          >
            <MdOutlineFilterAlt />
          </IconButton>
        </LocalizationProvider>
      </div>
      <Chart
        options={options}
        series={series}
        type="bar"
        height="200%"
        width="100%"
      />
    </Container>
  );
}

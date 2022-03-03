import Chart from 'react-apexcharts';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { Container } from './style';

export default function Top() {
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

  const [initialDate, setInitialDate] = useState(new Date());

  return (
    <Container>
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            value={initialDate}
            onChange={(newValue) => {
              setInitialDate(newValue);
            }}
          />
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

import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import { IconButton, TextField } from '@mui/material';
import { useState } from 'react';
import { MdOutlineFilterAlt } from 'react-icons/md';
import { ptBR } from 'date-fns/locale';
import { Container } from './style';

export default function Top() {
  const [initialDate, setInitialDate] = useState<number | null>(
    new Date().getTime() - 7 * 24 * 60 * 60 * 1000
  );
  const [endDate, setEndDate] = useState<number | null>(new Date().getTime());

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
          <IconButton aria-label="delete" sx={{ color: 'white' }} size="large">
            <MdOutlineFilterAlt />
          </IconButton>
        </LocalizationProvider>
      </div>
    </Container>
  );
}

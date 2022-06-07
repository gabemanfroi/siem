import { DatePicker, LocalizationProvider } from '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { MdRefresh } from 'react-icons/md';
import { useDashboard } from 'modules/Dashboard/contexts';
import { ptBR } from 'date-fns/locale';

const DateFilter = () => {
  const { filters, setFilters } = useDashboard();

  const [pendingInitialValue, setPendingInitialValue] = useState<number | null>(
    filters.initialDate
  );
  const [pendingEndDate, setPendingEndDate] = useState<number | null>(
    filters.endDate
  );

  const onInitialDateChange = (newValue: Date | null) => {
    if (newValue) setPendingInitialValue(newValue.getTime());
  };
  const onEndDateChange = (newValue: Date | null) => {
    if (newValue) setPendingEndDate(newValue.getTime());
  };

  const applyNewFilters = () => {
    setFilters({
      ...filters,
      initialDate: pendingInitialValue,
      endDate: pendingEndDate,
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
      <DatePicker
        label="Initial Date"
        renderInput={(params) => <TextField size="small" {...params} />}
        value={pendingInitialValue}
        onChange={onInitialDateChange}
      />
      <DatePicker
        label="Final Date"
        renderInput={(params) => <TextField size="small" {...params} />}
        value={pendingEndDate}
        onChange={onEndDateChange}
      />
      <Button
        variant="contained"
        endIcon={<MdRefresh />}
        onClick={applyNewFilters}
      >
        Send
      </Button>
    </LocalizationProvider>
  );
};

export default DateFilter;

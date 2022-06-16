import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { MdRefresh } from 'react-icons/md';
import { ptBR } from 'date-fns/locale';
import { useFilter } from 'modules/Shared/contexts/FilterContext';

const DateFilter = () => {
  const { filters, setFilters } = useFilter();

  const [pendingInitialValue, setPendingInitialValue] = useState<number | null>(
    filters.initialDate
  );
  const [pendingEndDate, setPendingEndDate] = useState<number | null>(
    filters.endDate
  );

  const onInitialDateChange = (newValue: Date | null) => {
    if (!newValue) return;
    setPendingInitialValue(newValue.getTime());
  };
  const onEndDateChange = (newValue: Date | null) => {
    if (!newValue) return;
    setPendingEndDate(newValue.getTime());
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
      <DesktopDatePicker
        label="Initial Date"
        renderInput={(params) => (
          <TextField data-testid="initialDatePicker" size="small" {...params} />
        )}
        value={pendingInitialValue}
        onChange={onInitialDateChange}
      />
      <DesktopDatePicker
        label="End Date"
        renderInput={(params) => (
          <TextField data-testid="endDatePicker" size="small" {...params} />
        )}
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

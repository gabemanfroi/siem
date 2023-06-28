import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { MdRefresh } from 'react-icons/md';
import { ptBR } from 'date-fns/locale';
import { useFilter } from 'modules/Shared/hooks';
import { useTranslation } from 'react-i18next';

const DateFilter = () => {
  const { filters, setFilters } = useFilter();
  const { t } = useTranslation();
  const [pendingInitialValue, setPendingInitialValue] = useState<
    number | null | Date
  >(filters.initialDate);
  const [pendingEndDate, setPendingEndDate] = useState<number | null | Date>(
    filters.finalDate
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
      finalDate: pendingEndDate,
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
      <DesktopDatePicker
        format="dd/MM/yyyy"
        label={t('Initial Date')}
        value={new Date(pendingInitialValue!)}
        onChange={onInitialDateChange}
      />
      <DesktopDatePicker
        format="dd/MM/yyyy"
        label={t('End Date')}
        value={new Date(pendingEndDate!)}
        onChange={onEndDateChange}
      />
      <IconButton onClick={applyNewFilters}>
        <MdRefresh />
      </IconButton>
    </LocalizationProvider>
  );
};

export default DateFilter;

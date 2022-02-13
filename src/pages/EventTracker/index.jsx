import DataTable from 'react-data-table-component';
import Events from 'modules/Shared/assets/data/events.json';
import { Container } from './style';

export default function EventTracker() {
  const columns = [
    {
      name: 'Active IP',
      selector: (row) => row.ip,
      sortable: true,
    },
    {
      name: 'Active Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Description',
      selector: (row) => row.description,
    },
    {
      name: 'GDPR',
      selector: (row) => row.gdpr,
    },
    {
      name: 'Fired Times',
      selector: (row) => row.firedtimes,
    },
    {
      name: 'Level',
      selector: (row) => row.level,
    },
    {
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <Container>
      <h1>Central de Eventos</h1>
      <DataTable data={Events} columns={columns} pagination />
    </Container>
  );
}

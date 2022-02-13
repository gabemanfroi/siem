import DataTable from 'react-data-table-component';
import Events from 'modules/Shared/assets/data/events.json';
import { useState } from 'react';
import { Container } from './style';

export default function EventTracker() {
  const [selectedEvent, setSelectedEvent] = useState();
  console.log(selectedEvent);
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
      // eslint-disable-next-line react/no-unstable-nested-components
      cell: (self) => (
        <TestButton setSelectedEvent={setSelectedEvent} event={self} />
      ),
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

function TestButton({ setSelectedEvent, event }) {
  return (
    <button
      onClick={() => {
        setSelectedEvent(event);
      }}
      type="button"
    >
      Detalhes
    </button>
  );
}

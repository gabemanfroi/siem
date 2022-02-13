import DataTable from 'react-data-table-component';
import { Container } from './style';

function ExpandedComponent({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default function AgentTracker() {
  const columns = [
    {
      name: 'Title',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Year',
      selector: (row) => row.year,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ];
  return (
    <Container>
      <h1>Central de Agentes</h1>
      <DataTable
        data={data}
        columns={columns}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
      />
    </Container>
  );
}

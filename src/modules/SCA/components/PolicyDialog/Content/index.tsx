import {
  Collapse,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { IPolicyCheckItem } from 'modules/SCA/interfaces';
import { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowUp } from 'react-icons/md';
import { gray200, white } from 'modules/Shared/helpers/styles/Colors';
import { useSCAQuery } from 'modules/SCA/hooks';
import { LoadingHandler } from 'modules/Shared/components';

interface RowProps {
  row: IPolicyCheckItem;
}

const Row = ({ row }: RowProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowRight />}
          </IconButton>
        </TableCell>
        <TableCell>{row.title}</TableCell>
        <TableCell>{row.remediation}</TableCell>
        <TableCell>{row.file}</TableCell>
        <TableCell>{row.result}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Stack p={2} gap={2}>
              <Stack>
                <Typography variant="h6" color={gray200}>
                  Rationale
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={white}
                  fontSize={16}
                  sx={{ fontWeight: 600 }}
                >
                  {row.rationale}
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="h6" color={gray200}>
                  Description
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={white}
                  fontSize={16}
                  sx={{ fontWeight: 600 }}
                >
                  {row.description}
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="h6" color={gray200}>
                  Remediation
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={white}
                  fontSize={16}
                  sx={{ fontWeight: 600 }}
                >
                  {row.remediation}
                </Typography>
              </Stack>
            </Stack>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const Content = () => {
  const { getPolicyByIdData, getPolicyByIdIsLoading } = useSCAQuery();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  return (
    <LoadingHandler loading={getPolicyByIdIsLoading}>
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Target</TableCell>
              <TableCell>Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getPolicyByIdData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((i) => (
                <Row row={i} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        count={getPolicyByIdData.length}
        onPageChange={(event, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        page={page}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </LoadingHandler>
  );
};

export default Content;

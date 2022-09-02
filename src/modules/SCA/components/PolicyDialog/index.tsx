import {
  Collapse,
  Dialog,
  DialogContent,
  DialogTitle,
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
import { useSCA } from 'modules/SCA/hooks';
import useSCAquery from 'modules/SCA/hooks/useSCAQuery';
import { useAgent } from 'modules/Agent/hooks';
import { MdKeyboardArrowRight, MdKeyboardArrowUp } from 'react-icons/md';
import { IPolicyCheckItem } from 'modules/SCA/interfaces';
import { useState } from 'react';
import { gray200, white } from 'modules/Shared/helpers/styles/Colors';

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

const PolicyDialog = () => {
  const {
    isPolicyDialogOpen,
    setIsPolicyDialogOpen,
    setSelectedPolicy,
    selectedPolicy,
  } = useSCA();

  const { selectedAgent } = useAgent();

  const { getPolicyByIdData } = useSCAquery();

  const onClose = () => {
    setSelectedPolicy(null);
    setIsPolicyDialogOpen(false);
  };

  if (!getPolicyByIdData) return <></>;

  return (
    <Dialog maxWidth="xl" fullWidth open={isPolicyDialogOpen} onClose={onClose}>
      <DialogTitle>
        {selectedAgent?.generalData.name} - {selectedPolicy?.name}
      </DialogTitle>
      <DialogContent>
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
              {getPolicyByIdData.map((i) => (
                <Row row={i} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          count={0}
          onPageChange={() => {}}
          rowsPerPage={5}
          page={1}
        />
      </DialogContent>
    </Dialog>
  );
};

export default PolicyDialog;

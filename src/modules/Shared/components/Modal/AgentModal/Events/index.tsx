import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { MdChevronRight } from 'react-icons/md';
import { CgChevronDown } from 'react-icons/cg';
import { AgentType } from '../../../../types/AgentType';
import { EventType } from '../../../../types/EventType';

interface EventsProps {
  agent: AgentType;
}

function Row({ event }: { event: EventType }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <CgChevronDown color={theme.palette.text.primary} />
            ) : (
              <MdChevronRight color={theme.palette.text.primary} />
            )}
          </IconButton>
        </TableCell>
        <TableCell align="right">{event.level}</TableCell>
        <TableCell align="right">{event.firedTimes}</TableCell>
        <TableCell align="right">{event.description}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const Events = ({ agent }: EventsProps) => (
  <TableContainer component={Paper}>
    <Table size="small" aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell align="right">Level</TableCell>
          <TableCell align="right">Fired Times</TableCell>
          <TableCell align="right">Total Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {agent.events.map((event) => (
          <Row key={event.firedTimes} event={event} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default Events;

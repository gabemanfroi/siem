import {
  Box,
  Collapse,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { AgentType, EventType } from 'modules/Shared/types';

interface EventsProps {
  agent: AgentType;
}

function Row({ event }: { event: EventType }) {
  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align="right">{event.level}</TableCell>
        <TableCell align="right">{event.firedTimes}</TableCell>
        <TableCell align="right">{event.description}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Level</TableCell>
                    <TableCell align="right">Nº Disparos</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Full Message</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="right">{event.level}</TableCell>
                    <TableCell align="right">{event.firedTimes}</TableCell>
                    <TableCell align="right">{event.description}</TableCell>
                    <TableCell align="right">{event.message}</TableCell>
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

const Events = ({ agent }: EventsProps) => {
  if (!agent.events) return <></>;

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right">Level</TableCell>
            <TableCell align="right">Nº Disparos</TableCell>
            <TableCell align="right">Descrição</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {agent.events.map((event) => (
            <Row key={event.id} event={event} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Events;

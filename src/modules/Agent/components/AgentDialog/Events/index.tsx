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
import { IEvent } from 'modules/Shared/interfaces';
import { useAgent } from 'modules/Agent/hooks';

function Row({ event }: { event: IEvent }) {
  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align="right">{event.rule.level}</TableCell>
        <TableCell align="right">{event.rule.firedTimes}</TableCell>
        <TableCell align="right">{event.rule.description}</TableCell>
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
                    <TableCell align="right">{event.rule.level}</TableCell>
                    <TableCell align="right">{event.rule.firedTimes}</TableCell>
                    <TableCell align="right">
                      {event.rule.description}
                    </TableCell>
                    <TableCell align="right">{event.win?.message}</TableCell>
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

const Events = () => {
  const { selectedAgent } = useAgent();

  if (!selectedAgent) return <></>;

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
          {selectedAgent.events.map((event) => (
            <Row key={event.id} event={event} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Events;

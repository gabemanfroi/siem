import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { useAgentQuery } from 'modules/Agent/hooks/queries';

const Vulnerabilities = () => {
  const { getAgentVulnerabilitiesData } = useAgentQuery();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Severity</TableCell>
            <TableCell>CVE</TableCell>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getAgentVulnerabilitiesData.map((v) => (
            <TableRow key={`${v.cve}${v.detectionTime}`}>
              <TableCell>{v.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Vulnerabilities;

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { LoadingHandler } from 'modules/Shared/components';
import React from 'react';
import { useAgentQuery } from 'modules/Agent/hooks/queries';
import { useAgent } from 'modules/Agent/hooks';
import { useSCA } from 'modules/SCA/hooks';

const PoliciesTable = () => {
  const { selectedAgentId } = useAgent();
  const { setSelectedPolicy, setIsPolicyDialogOpen } = useSCA();

  const { getAgentPoliciesData } = useAgentQuery({
    elasticsearchId: selectedAgentId!,
  });

  return (
    <LoadingHandler sx={{ width: '100%', height: '100%' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Pass</TableCell>
              <TableCell>Fail</TableCell>
              <TableCell>Not Applicable</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getAgentPoliciesData.map((p) => (
              <TableRow
                onClick={() => {
                  setSelectedPolicy(p);
                  setIsPolicyDialogOpen(true);
                }}
                key={p.policyId}
              >
                <TableCell>{p.description}</TableCell>
                <TableCell>{p.pass}</TableCell>
                <TableCell>{p.fail}</TableCell>
                <TableCell align="center">{p.invalid}</TableCell>
                <TableCell>{p.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LoadingHandler>
  );
};

export default PoliciesTable;

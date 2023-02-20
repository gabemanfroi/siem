import { Stack } from '@mui/material';
import { primary700 } from 'modules/Shared/helpers/styles/Colors';
import { generateRandomSeclabEvent } from 'modules/Shared/helpers/factories/mocks/SeclabEventMock';
import { useEffect, useState } from 'react';
import ISeclabEvent from 'modules/Shared/interfaces/ISeclabEvent';
import { useAnalysisContext } from 'modules/Analysis/hooks';

const LatestAnalyses = () => {
  const [analyses, setAnalyses] = useState<ISeclabEvent[]>([]);
  const { setIsAnalysisDialogOpen, setSelectedAnalysis } = useAnalysisContext();

  useEffect(() => {
    const array = [];
    for (let i = 0; i < 10; i += 1) {
      array.push(generateRandomSeclabEvent());
    }
    setAnalyses(array);
  }, []);

  return (
    <Stack spacing={1}>
      {analyses.map((e) => (
        <Stack
          p={1}
          key={e.id}
          onClick={() => {
            setSelectedAnalysis(e);
            setIsAnalysisDialogOpen(true);
          }}
          sx={{
            fontSize: 16,
            background: 'white',
            borderRadius: 1,
            color: 'black',
            '&:hover': {
              cursor: 'pointer',
              background: primary700,
              color: 'white',
              transition: 'color ease 0.1s,background ease 0.2s',
              border: 'none',
            },
          }}
        >
          {e.analysis.observable}
        </Stack>
      ))}
    </Stack>
  );
};

export default LatestAnalyses;

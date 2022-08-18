import { RiBug2Fill, RiSpyFill } from 'react-icons/ri';
import { Stack, Typography } from '@mui/material';
import { IThreat } from 'modules/Shared/interfaces';
import { BiTargetLock } from 'react-icons/bi';
import {
  dark200,
  primary700,
  white,
} from 'modules/Shared/helpers/styles/Colors';
import { formatDistance } from 'date-fns';
import { useSecurityEvent } from 'modules/SecurityEvent/contexts/SecurityEventContext';

interface ThreatProps {
  threat: IThreat;
}

const threatIconMap = {
  mitre: <RiSpyFill size={24} />,
  vulnerability: <BiTargetLock size={24} />,
  virustotal: <RiBug2Fill size={24} />,
};

const Threat = ({ threat }: ThreatProps) => {
  const { setSelectedEventId } = useSecurityEvent();
  return (
    <Stack
      onClick={() => {
        setSelectedEventId(threat.id);
      }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        p: 1,
        borderRadius: 2,
        background: white,
        color: dark200,
        '&:hover': {
          cursor: 'pointer',
          background: primary700,
          color: 'white',
          transition: 'color ease 0.1s,background ease 0.2s',
          border: 'none',
        },
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        {threatIconMap[threat.category]}
        <Typography
          style={{
            fontSize: 18,
            display: 'flex',
            alignItems: 'center',
            paddingTop: '4px',
          }}
        >
          {threat.description}
        </Typography>
      </Stack>
      <Typography>
        {formatDistance(new Date(threat.timestamp), new Date(), {
          addSuffix: true,
        })}
      </Typography>
    </Stack>
  );
};

export default Threat;

import { useContext } from 'react';
import { SCAContext } from 'modules/SCA/contexts/SCAContext';

const useSCAContext = () => useContext(SCAContext);

export default useSCAContext;

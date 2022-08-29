import { useContext } from 'react';
import { SCAContext } from 'modules/SCA/contexts/SCAContext';

const useSCA = () => useContext(SCAContext);

export default useSCA;

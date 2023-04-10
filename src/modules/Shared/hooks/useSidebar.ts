import { useContext } from 'react';
import { SidebarContext } from 'modules/Shared/contexts/SidebarContext';

const useSidebar = () => useContext(SidebarContext);

export default useSidebar;

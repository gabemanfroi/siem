import Dashboard from 'pages/Dashboard';
import './sass/main.scss';
import { Sidebar } from './modules/Shared/components';

export default function App() {
  return (
    <>
      <Sidebar />
      <Dashboard />
    </>
  );
}

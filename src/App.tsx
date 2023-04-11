import { ErrorSnackbar } from 'modules/Shared/components/';
import Router from 'modules/Shared/components/Router';
import './scss/main.scss';
import './scss/main.css';
import Dialogs from 'modules/Shared/containers/Dialogs';
import { DefaultProvider } from 'modules/Shared/providers/DefaultProvider';

export default function App() {
  return (
    <DefaultProvider>
      <Router />
      <Dialogs />
      <ErrorSnackbar />
    </DefaultProvider>
  );
}

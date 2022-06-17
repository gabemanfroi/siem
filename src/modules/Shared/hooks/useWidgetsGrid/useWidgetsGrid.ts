import { useEffect, useState } from 'react';

import { useLoading } from 'modules/Shared/contexts';
import { useWebsocket } from 'modules/Shared/contexts/WebSocketContext';
import { useFilter } from 'modules/Shared/contexts/FilterContext';
import { w3cwebsocket } from 'websocket';
import { IWidget, IWidgetsHandler } from 'modules/Shared/interfaces/Widgets';
import { TokenUtil } from '../../utils';

const W3CWebSocket = w3cwebsocket;

const useWidgetsGrid = (
  widgets: IWidget[],
  widgetsHandler: IWidgetsHandler,
  apiEndpoint: string
) => {
  const { setIsLoading } = useLoading();
  const { websocket, setWebsocket } = useWebsocket();
  const { filters } = useFilter();
  const [connectionTimeout, setConnectionTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [layouts, setLayouts] = useState({
    lg: widgets.map((w) => w.options.lg),
  });

  function createWebSocketConnection() {
    setIsLoading(true)
    setWebsocket(
      new W3CWebSocket(`${process.env.REACT_APP_WS_API_URL}${apiEndpoint}?jwt=${TokenUtil().getToken()}`)
    );
    if (websocket) {
      websocket.onopen = () => {
        const widgetsToGetFromBackend = widgets.map((w) => w.identifier);
        websocket.send(
          JSON.stringify({
            selectedWidgets: widgetsToGetFromBackend,
            initialDate: filters.initialDate,
            endDate: filters.endDate,
          })
        );
      };
      websocket.onmessage = ({ data }) => {
        const parsedData = JSON.parse(String(data));
        Object.keys(parsedData).forEach((key) => {
          widgetsHandler[key](parsedData[key]);
        });
        setIsLoading(false);
      };
    }
  }

  function refreshConnection() {
    if (websocket) websocket.close();
    createWebSocketConnection();
  }

  useEffect(() => {
    if (connectionTimeout) {
      clearTimeout(connectionTimeout);
    }
    setConnectionTimeout(setTimeout(refreshConnection, 100));
  }, [filters, widgets]);

  if (apiEndpoint === '/dashboard') {
    useEffect(() => {
      setLayouts({
        lg: widgets.map((w) => w.options.lg),
      });
    }, [widgets]);
  }

  return { layouts };
};

export default useWidgetsGrid;

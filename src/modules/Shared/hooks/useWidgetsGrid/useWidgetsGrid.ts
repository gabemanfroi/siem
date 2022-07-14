import { useEffect, useState } from 'react';

import { useLoading } from 'modules/Shared/contexts';
import { useWebsocket } from 'modules/Shared/contexts/WebSocketContext';
import { useFilter } from 'modules/Shared/contexts/FilterContext';
import { w3cwebsocket } from 'websocket';
import { IWidget, IWidgetsHandler } from 'modules/Shared/interfaces/Widgets';
import { TokenUtil } from 'modules/Shared/utils';

const W3CWebSocket = w3cwebsocket;

const useWidgetsGrid = (
  widgets: IWidget[],
  widgetsHandler: IWidgetsHandler,
  apiEndpoint: string,
) => {
  const { setIsLoading } = useLoading();
  const { websocket, setWebsocket } = useWebsocket();
  const { filters } = useFilter();
  const [connectionTimeout, setConnectionTimeout] =
    useState<ReturnType<typeof setTimeout> | null>(null);
  const [layouts, setLayouts] = useState({
    lg: widgets.map((w) => w.options.lg),
  });

  const createWebSocketConnection = () => {
    setIsLoading(true);
    setWebsocket(
      new W3CWebSocket(`ws://localhost:8002/api/dashboard?jwt=${TokenUtil().getToken()}`),
    );
  };

  const getWidgetsToRetrieveFromServer = () => {
    const widgetsToRetrieveFromServer: { [key: string]: string[] } = {};

    widgets.forEach((w) => {
      if (widgetsToRetrieveFromServer[w.framework]) {
        widgetsToRetrieveFromServer[w.framework].push(w.identifier);
      } else {
        widgetsToRetrieveFromServer[w.framework] = [];
      }
    });
    return widgetsToRetrieveFromServer;
  };

  const fillWidgetsWithData = (data: any) => {
    Object.keys(data).forEach((key) => {
      widgetsHandler[key](data[key]);
    });
  };

  const getOnmessage = ({ data }: { data: string | ArrayBuffer | Buffer }) => {
    const parsedData = JSON.parse(String(data));
    fillWidgetsWithData(parsedData);
    setIsLoading(false);
  };

  const onOpen = () => {
    websocket!.send(
      JSON.stringify({
        selectedWidgets: getWidgetsToRetrieveFromServer(),
        initialDate: filters.initialDate,
        endDate: filters.endDate,
      }),
    );
  };

  useEffect(() => {
    if (websocket) {
      websocket.onopen = onOpen;
      websocket.onmessage = getOnmessage;
    }
  }, [websocket]);

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

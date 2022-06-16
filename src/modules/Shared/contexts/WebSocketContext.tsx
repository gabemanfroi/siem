import React, { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from 'react';
import { w3cwebsocket } from 'websocket';

interface IWebSocketContext {
  websocket: w3cwebsocket | null;
  setWebsocket: Dispatch<SetStateAction<w3cwebsocket | null>>;
}

const initialValues: IWebSocketContext = {
  websocket: null,
  setWebsocket: () => {},
};

const WebSocketContext = createContext<IWebSocketContext>(initialValues);

export const WebSocketProvider: React.FC = ({ children }) => {
  const [websocket, setWebsocket] = useState<w3cwebsocket | null>(null);

  const value = useMemo(
    () => ({
      setWebsocket,
      websocket,
    }),
    [websocket]
  );

  return (
    <WebSocketContext.Provider value={value}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebsocket = () => useContext(WebSocketContext);

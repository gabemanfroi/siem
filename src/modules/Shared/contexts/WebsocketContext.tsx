import React, { createContext, useContext, useMemo } from 'react';

const WebsocketContext = createContext({});

export const WebsocketProvider: React.FC = ({ children }) => {
  const websocket = null;
  const value = useMemo(() => ({ websocket }), []);

  return (
    <WebsocketContext.Provider value={value}>
      {children}
    </WebsocketContext.Provider>
  );
};

export const useWebsocket = () => useContext(WebsocketContext);

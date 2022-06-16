import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Container } from './style';

interface AnyReactComponentInterface {
  text: string;
}

const AnyReactComponent = ({ text }: AnyReactComponentInterface) => (
  <div>{text}</div>
);

const Heatmap = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA_uDcFhr2ziHkW9uTrYyC8okZmgy4oCtg' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent text="My Marker" />
      </GoogleMapReact>
    </Container>
  );
};

export default Heatmap;

import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Container } from './style';

const AnyReactComponent = ({ text }: { text: string }) => <div>{text}</div>;

export default function Bottom() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  // @ts-ignore
  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA_uDcFhr2ziHkW9uTrYyC8okZmgy4oCtg' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* @ts-ignore} */}
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </Container>
  );
}

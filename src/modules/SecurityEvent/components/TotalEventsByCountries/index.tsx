// @ts-nocheck
/* eslint-disable camelcase */

import { GeoJSON, MapContainer, TileLayer, useMap } from 'react-leaflet';
import { Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { LatLngTuple } from 'leaflet';
import countries from 'assets/countries.geo.json';
import { useTotalEventsByCountries } from 'modules/SecurityEvent/hooks/queries/useTotalEventsByCountries';
import { LoadingHandler } from 'modules/Shared/components';

const getColor = (total) => {
  if (total > 1000) {
    return '#0a4289';
  }
  if (total > 500) {
    return '#0c4ea2';
  }
  if (total > 250) {
    return '#0e5abb';
  }
  if (total > 125) {
    return '#1066d4';
  }
  if (total > 75) {
    return '#1272ed';
  }
  return '#2b80ef';
};

const getStyle = (feature, eventsByCountry) => {
  const {
    properties: { name_long },
  } = feature;
  const country = eventsByCountry.find((c) => c.countryName === name_long);

  return {
    fillColor: getColor(country.total),
    opacity: 2,
    stroke: false,
  };
};

const MyComponent = () => {
  const [userLocation, setUserLocation] = useState<LatLngTuple>([0, 0]);

  const map = useMap();
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      });
    }
  }, []);

  useEffect(() => {
    map.setView(userLocation, 1);
  }, [userLocation]);

  return null;
};

export const Choropleth = () => {
  const [geoJson, setGeoJson] = useState(null);
  const { totalEventsByCountriesLoading, totalEventsByCountriesData } =
    useTotalEventsByCountries();

  useEffect(() => {
    const countryNames = totalEventsByCountriesData.map((c) => c.countryName);
    if (countries && !geoJson && !totalEventsByCountriesLoading) {
      setGeoJson({
        type: 'FeatureCollection',
        features: [
          ...countries.features.filter((feature) =>
            countryNames.includes(feature.properties.name_long)
          ),
        ],
      });
    }
  }, [countries, totalEventsByCountriesData]);

  return (
    <LoadingHandler loading={totalEventsByCountriesLoading}>
      <Stack height="100%" gap={1}>
        <Stack height="60%" width="100%" p={0.3}>
          {geoJson && (
            <MapContainer
              center={[0, 0]}
              zoom={8}
              scrollWheelZoom={false}
              style={{ height: '100%', width: '100%' }}
              bounceAtZoomLimits={false}
              maxBounds={[
                [90, -180],
                [-90, 180],
              ]}
            >
              <MyComponent />
              <TileLayer
                noWrap
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <GeoJSON
                data={geoJson}
                style={(feature) =>
                  getStyle(feature, totalEventsByCountriesData)
                }
              />
            </MapContainer>
          )}
        </Stack>
        <Stack height="40%">
          {totalEventsByCountriesData.map((c) => (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" alignItems="center" gap={0.5}>
                <Typography variant="caption">{c.countryName}</Typography>
              </Stack>
              <Typography variant="caption">{c.total}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </LoadingHandler>
  );
};

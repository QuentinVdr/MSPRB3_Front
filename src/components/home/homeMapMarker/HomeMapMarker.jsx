import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton, Stack } from '@mui/material';
import L from 'leaflet';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

HomeMapMarker.propTypes = {
  plants: PropTypes.array.isRequired,
  openDetail: PropTypes.func.isRequired
};

export default function HomeMapMarker({ plants, openDetail }) {
  const mapRef = useMap();

  useEffect(() => {
    mapBounds();
  }, []);

  const mapBounds = () => {
    let markerBounds = mapRef.getBounds();

    plants.forEach((marker) => {
      markerBounds.extend([marker.latitude, marker.longitude]);
    });

    mapRef.fitBounds(markerBounds);
  };

  return (
    <MarkerClusterGroup chunkedLoading maxClusterRadius={50}>
      {plants.map((plant) => (
        <Marker position={L.latLng(plant.latitude, plant.longitude)} key={plant.id}>
          <Popup>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              {plant.name}
              <IconButton onClick={() => openDetail(plant)}>
                <VisibilityIcon />
              </IconButton>
            </Stack>
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );
}

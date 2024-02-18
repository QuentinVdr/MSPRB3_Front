import FilterDrawer from '@components/home/filterDrawer/FilterDrawer';
import HomeMapMarker from '@components/home/homeMapMarker/HomeMapMarker';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Button, Card, Grid, Stack, Typography } from '@mui/material';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import styles from './Home.module.scss';

export const plants = [
  {
    id: 1,
    name: 'Peace Lily',
    description: 'A popular indoor plant',
    address: '123 Green Street',
    city: 'Plantville',
    postalCode: '44001',
    latitude: 47.216672,
    longitude: -1.57,
    isNeedingCare: false,
    isNeedingTips: true
  },
  {
    id: 2,
    name: 'Aloe Vera',
    description: 'A plant with potential medicinal properties',
    address: '123 Herbal Lane',
    city: 'Herbville',
    postalCode: '44001',
    latitude: 47.216672,
    longitude: -1.57,
    isNeedingCare: false,
    isNeedingTips: true
  },
  {
    id: 3,
    name: 'Snake Plant',
    description: 'A hardy indoor plant',
    address: '456 Green Street',
    city: 'Plantville',
    postalCode: '44002',
    latitude: 47.216673,
    longitude: -1.58,
    isNeedingCare: false,
    isNeedingTips: false
  },
  {
    id: 4,
    name: 'Spider Plant',
    description: 'A popular houseplant with striped leaves',
    address: '789 Leafy Boulevard',
    city: 'Greentown',
    postalCode: '44003',
    latitude: 47.216674,
    longitude: -1.59,
    isNeedingCare: true,
    isNeedingTips: true
  }
];

/**
 * Page that contains all the components displayed on the application homepage
 */
export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const defaultCenter = L.latLng(47.216671, -1.55);
  const minimalZoom = 13;

  return (
    <Grid container direction="row" className={styles.homePage}>
      <Grid item xs={6} sm={5} md={4} lg={3} container direction="column" gap={3} className={styles.plantesList}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h2">Les plantes</Typography>
          <Stack alignItems="center" justifyContent="center">
            <Button variant="outlined" startIcon={<FilterAltIcon />} onClick={() => setIsFilterOpen(true)}>
              Filtres
            </Button>
            <FilterDrawer isOpen={isFilterOpen} closeDrawer={() => setIsFilterOpen(false)} />
          </Stack>
        </Stack>
        <Stack direction="column" gap={2}>
          <Typography variant="h3">plante</Typography>
          <Stack direction="column" gap={1}>
            {plants.map((plant) => (
              <Card variant="outlined" key={`${plant.key} ${plant.name}`}>
                <Typography variant="body1">{plant.name}</Typography>
              </Card>
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={7} md={8} lg={9}>
        <MapContainer
          className={styles.mapContainer}
          center={defaultCenter}
          zoom={minimalZoom}
          placeholder={<Typography variant="body1">Ca charge, attend</Typography>}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <HomeMapMarker plantes={plants} />
        </MapContainer>
      </Grid>
    </Grid>
  );
}

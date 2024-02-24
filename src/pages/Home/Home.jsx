import FilterDrawer from '@components/home/filterDrawer/FilterDrawer';
import HomeMapMarker from '@components/home/homeMapMarker/HomeMapMarker';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Button, Card, Grid, Stack, Typography } from '@mui/material';
import { usePlantsStore } from '@stores/dataStore/PlantsStore';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import styles from './Home.module.scss';

export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const plants = usePlantsStore((state) => state.plants);

  const defaultCenter = L.latLng(47.216671, -1.55);
  const minimalZoom = 13;

  return (
    <Grid container direction={{ xs: 'column-reverse', md: 'row' }} wrap="nowrap" className={styles.homePage}>
      <Grid item xs={4} lg={3} container direction="column" gap={3} className={styles.plantsList}>
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
      <Grid item xs={8} lg={9}>
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

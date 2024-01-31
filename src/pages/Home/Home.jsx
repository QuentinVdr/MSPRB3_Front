import HomeMapMarker from '@components/home/homeMapMarker/HomeMapMarker';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Button, Card, Grid, Stack, Typography } from '@mui/material';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import styles from './Home.module.scss';

/**
 * Page that contains all the components displayed on the application homepage
 */
export default function Home() {
  const mapRef = useRef();
  const defaultCenter = L.latLng(47.216671, -1.55);
  const minimalZoom = 13;
  const plantes = [
    { id: 1, name: 'omg plante', latitude: 47.216671, longitude: -1.56 },
    { id: 2, name: 'plante ?', latitude: 47.216671, longitude: -1.55 },
    { id: 3, name: 'végétal', latitude: 47.4, longitude: -1.54 },
    { id: 4, name: 'weed', latitude: 47.4, longitude: -100 }
  ];

  return (
    <Grid container direction="row" className={styles.homePage}>
      <Grid item xs={6} sm={5} md={4} lg={3} container direction="column" gap={3} className={styles.plantesList}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h2">Les plantes</Typography>
          <Stack alignItems="center" justifyContent="center">
            <Button variant="outlined" startIcon={<FilterAltIcon />}>
              Filtres
            </Button>
          </Stack>
        </Stack>
        <Stack direction="column" gap={2}>
          <Typography variant="h3">plante</Typography>
          <Stack direction="column" gap={1}>
            {plantes.map((plante) => (
              <Card variant="outlined" key={`${plante.key} ${plante.name}`}>
                <Typography variant="body1">{plante.name}</Typography>
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
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <HomeMapMarker plantes={plantes} />
        </MapContainer>
      </Grid>
    </Grid>
  );
}

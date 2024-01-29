import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Button, Card, Grid, Stack, Typography } from '@mui/material';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './Home.module.scss';

/**
 * Page that contains all the components displayed on the application homepage
 */
export default function Home() {
  const mapRef = useRef();
  const center = L.latLng(47.216671, -1.55);

  const plantes = [
    { id: 1, name: 'omg plante' },
    { id: 2, name: 'plante ?' }
  ];

  return (
    <Grid container direction="row" className={styles.homePage}>
      <Grid item xs={3} container direction="column" gap={3} className={styles.plantesList}>
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
              <Card variant="outlined" key={plante.key}>
                <Typography variant="body1">{plante.name}</Typography>
              </Card>
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={9}>
        <MapContainer className={styles.mapContainer} center={center} zoom={13} scrollWheelZoom={false} ref={mapRef}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Grid>
    </Grid>
  );
}

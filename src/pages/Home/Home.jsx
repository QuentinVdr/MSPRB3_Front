import { Grid, Typography } from '@mui/material';
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

  return (
    <Grid container direction="row" className={styles.home_page}>
      <Grid item xs={2}>
        <Typography variant="h2">Bienvenue</Typography>
      </Grid>
      <Grid item xs={10}>
        <MapContainer className={styles.map_container} center={center} zoom={13} scrollWheelZoom={false} ref={mapRef}>
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

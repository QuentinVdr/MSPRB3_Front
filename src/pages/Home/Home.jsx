import FilterDrawer from '@components/home/filterDrawer/FilterDrawer';
import HomeMapMarker from '@components/home/homeMapMarker/HomeMapMarker';
import PlantDetail from '@components/home/plantDetail/PlantDetail';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button, Card, Grid, IconButton, Stack, Typography } from '@mui/material';
import { usePlantsStore } from '@stores/dataStore/PlantsStore';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import styles from './Home.module.scss';

export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const plants = usePlantsStore((state) => state.plants);
  const mapRef = useRef();

  const [isPlantDetailOpen, setIsPlantDetailOpen] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);

  const openDetail = (plant) => {
    setSelectedPlant(plant);
    setIsPlantDetailOpen(true);
  };

  const handleCLose = () => {
    setSelectedPlant(null);
    setIsPlantDetailOpen(false);
  };

  const defaultCenter = L.latLng(47.216671, -1.55);
  const minimalZoom = 13;

  const handlePlantCardClick = (plant) => {
    if (mapRef.current) {
      mapRef.current.flyTo(L.latLng(plant.latitude, plant.longitude), 18, { duration: 1 });
    }
  };

  return (
    <>
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
                <Card
                  variant="outlined"
                  key={`${plant.key} ${plant.name}`}
                  className={styles.plantsListItem}
                  onClick={() => handlePlantCardClick(plant)}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="body1">{plant.name}</Typography>
                    <IconButton onClick={() => openDetail(plant)}>
                      <VisibilityIcon />
                    </IconButton>
                  </Stack>
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
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <HomeMapMarker plants={plants} openDetail={openDetail} />
          </MapContainer>
        </Grid>
      </Grid>
      <PlantDetail isPlantDetailOpen={isPlantDetailOpen} handleClose={handleCLose} plant={selectedPlant} />
    </>
  );
}

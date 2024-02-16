import { Button, Grid, Stack, Typography } from '@mui/material';
import { plants } from '@pages/Home/Home';
import { useState } from 'react';
import styles from './Plant.module.scss';

export default function Plant() {
  const [selectedPlant, setSelectedPlant] = useState(plants[0]);

  const addNewPlant = () => {
    console.log('add new plant');
  };

  return (
    <Grid container direction="row" spacing={3} className={styles.plantPage}>
      <Grid item md={3} container direction="column" gap={2}>
        <Typography variant="h2">Mes plantes</Typography>
        <Stack direction="column" gap={1}>
          {plants.map((plant, index) => (
            <div
              key={`${plant.key} ${plant.name}`}
              onClick={() => setSelectedPlant(plant)}
              className={styles.myPlantsCard}
              role="button"
              tabIndex={index}
            >
              <Typography variant="body1">{plant.name}</Typography>
            </div>
          ))}
          <Button variant="contained" onClick={addNewPlant}>
            Ajouter une nouvelle place
          </Button>
        </Stack>
      </Grid>
      <Grid item md={9} container direction="column" gap={2}>
        <Typography variant="h2">Plantes detail</Typography>
        <Stack direction="column" gap={2} className={styles.selectedPlantCard}>
          <Typography variant="h2">{selectedPlant.name}</Typography>
          <Grid container direction="row" spacing={1}>
            <Grid item xs={12}>
              <Typography variant="body1">{selectedPlant.description}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">{selectedPlant.address}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">{selectedPlant.city}</Typography>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}

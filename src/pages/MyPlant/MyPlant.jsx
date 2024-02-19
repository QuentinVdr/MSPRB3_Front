import PlantForm from '@components/plant/PlantForm/PlantForm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid, IconButton, Modal, Stack, Typography } from '@mui/material';
import { plants } from '@pages/Home/Home';
import { useState } from 'react';
import styles from './MyPlant.module.scss';

export default function MyPlant() {
  const [selectedPlant, setSelectedPlant] = useState(plants[0]);
  const [selectedPlantUpdate, setSelectedPlantUpdate] = useState(null);
  const [isPlantFormOpen, setIsPlantFormOpen] = useState(false);

  const handleOpen = () => {
    setIsPlantFormOpen(true);
  };

  const handleUpdate = (plant) => {
    setSelectedPlantUpdate(plant);
    setIsPlantFormOpen(true);
  };

  const handleDelete = (plant) => {
    console.log('delete', plant);
  };

  const handleClose = () => {
    setSelectedPlantUpdate(null);
    setIsPlantFormOpen(false);
  };

  return (
    <>
      <Grid container direction="row" spacing={3} className={styles.plantPage}>
        <Grid item md={3} container direction="column" gap={2}>
          <Typography variant="h2">Mes plantes</Typography>
          <Stack direction="column" gap={1}>
            {plants.map((plant) => (
              <Stack
                key={`${plant.key} ${plant.name}`}
                onClick={() => setSelectedPlant(plant)}
                className={styles.myPlantsCard + (plant == selectedPlant ? ` ${styles.selectedPlantCard}` : '')}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body1">{plant.name}</Typography>
                <Stack direction="row">
                  <IconButton onClick={() => handleUpdate(plant)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(plant)}>
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Button variant="contained" onClick={handleOpen} className={styles.addPlantButton}>
            Ajouter une nouvelle plante
          </Button>
        </Grid>
        <Grid item md={9} container direction="column" gap={2}>
          <Typography variant="h2">Plante detail</Typography>
          <Stack direction="column" gap={2} className={styles.selectedPlantDetail}>
            <Typography variant="h2">{selectedPlant.name}</Typography>
            <Grid container direction="row" spacing={1}>
              <Grid item xs={12}>
                <Typography variant="body1">{selectedPlant.description}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">{selectedPlant.address}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">{selectedPlant.city}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">{selectedPlant.postalCode}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  {selectedPlant.isNeedingCare
                    ? `${selectedPlant.name} a besoin de soin`
                    : `${selectedPlant.name} n'a pas besoin de soin`}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  {selectedPlant.isNeedingTips
                    ? `${selectedPlant.name} a besoin d'aide`
                    : `${selectedPlant.name} n'a pas besoin d'aide`}
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
      <Modal open={isPlantFormOpen} onClose={handleClose} className={styles.plantFormModal}>
        <Stack gap={3} className={styles.plantFormCard}>
          <PlantForm afterValidation={handleClose} afterCancel={handleClose} defaultPlant={selectedPlantUpdate} />
        </Stack>
      </Modal>
    </>
  );
}

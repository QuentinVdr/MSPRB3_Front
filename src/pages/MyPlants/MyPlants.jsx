import PlantForm from '@components/plant/PlantForm/PlantForm';
import { useAuth } from '@hooks/contexts/useAuth';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid, IconButton, Modal, Stack, Typography } from '@mui/material';
import { useSnackbarStore } from '@stores/SnackbarStore';
import { usePlantsStore } from '@stores/dataStore/PlantsStore';
import { useState } from 'react';
import styles from './MyPlants.module.scss';

export default function MyPlant() {
  const { user } = useAuth();
  const myPlants = usePlantsStore((state) => state.getMyPlants(user?.id));
  const removePlant = usePlantsStore((state) => state.removePlant);
  const { showSuccess } = useSnackbarStore();
  const [selectedPlant, setSelectedPlant] = useState(myPlants[0] ?? null);
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
    removePlant(plant.id);
    showSuccess({ message: `La plante ${plant.name} à été supprimé` });
  };

  const handleClose = () => {
    setSelectedPlantUpdate(null);
    setIsPlantFormOpen(false);
  };

  return (
    <>
      <Stack direction={{ xs: 'column', md: 'row-reverse' }} spacing={3} className={styles.plantsPage}>
        <Stack direction="column" gap={2} flex={3} className={styles.plantDetailSection}>
          <Typography variant="h2">Plante detail</Typography>
          <Stack direction="column" gap={2} className={styles.selectedPlantDetail}>
            {!selectedPlant ? (
              <Typography variant="body1">Aucune plante est sélectionner</Typography>
            ) : (
              <>
                <Typography variant="h2">{selectedPlant?.name}</Typography>
                <Grid container direction="row" spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="body1">{selectedPlant?.description}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">{selectedPlant?.address}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">{selectedPlant?.city}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">{selectedPlant?.postalCode}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">
                      {selectedPlant?.isNeedingCare
                        ? `${selectedPlant?.name} a besoin de soin`
                        : `${selectedPlant?.name} n'a pas besoin de soin`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">
                      {selectedPlant?.isNeedingTips
                        ? `${selectedPlant?.name} a besoin d'aide`
                        : `${selectedPlant?.name} n'a pas besoin d'aide`}
                    </Typography>
                  </Grid>
                  <Stack direction="row" flexWrap="nowrap" className={styles.selectedPlantImages}>
                    {selectedPlant?.images?.map((image, index) => (
                      <img
                        key={image}
                        src={image}
                        alt={`the plant ${selectedPlant?.name} ${index}`}
                        className={styles.selectedPlantImage}
                      />
                    ))}
                  </Stack>
                </Grid>
              </>
            )}
          </Stack>
        </Stack>
        <Stack direction="column" gap={2} flex={1} className={styles.plantsListSection}>
          <Typography variant="h2">Mes plantes</Typography>
          {myPlants.length < 1 ? (
            <Stack justifyContent="center" alignItems="center">
              <Typography variant="body1">Vous n&apos;avez pas de plante</Typography>
            </Stack>
          ) : (
            <Stack direction="column" gap={1} className={styles.plantsList}>
              {myPlants.map((plant) => (
                <Stack
                  key={`${plant.id} ${plant.name}`}
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
          )}
          <Button variant="contained" onClick={handleOpen} className={styles.addPlantButton}>
            Ajouter une nouvelle plante
          </Button>
        </Stack>
      </Stack>
      <Modal open={isPlantFormOpen} onClose={handleClose} className={styles.plantFormModal}>
        <Stack gap={3} className={styles.plantFormCard}>
          <PlantForm afterValidation={handleClose} afterCancel={handleClose} defaultPlant={selectedPlantUpdate} />
        </Stack>
      </Modal>
    </>
  );
}

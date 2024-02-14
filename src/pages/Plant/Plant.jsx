import { Stack, Typography } from '@mui/material';
import styles from './Plant.module.scss';

export default function Plant() {
  return (
    <Stack direction="row" className={styles.plantPage}>
      <Stack direction="column">
        <Typography variant="body1">Mes plantes</Typography>
      </Stack>
      <Stack direction="column">
        <Typography variant="body1">Ajouter une plante</Typography>
      </Stack>
    </Stack>
  );
}

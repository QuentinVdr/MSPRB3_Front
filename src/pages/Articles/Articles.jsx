import { Grid, Typography } from '@mui/material';
import styles from './Articles.module.scss';

export default function Articles() {
  return (
    <Grid container direction="row" spacing={3} className={styles.articlesPage}>
      <Typography variant="h2">Articles</Typography>
    </Grid>
  );
}

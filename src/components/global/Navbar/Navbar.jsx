import { AppBar, Typography } from '@mui/material';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <AppBar className={styles.navbar} position="sticky">
      <Typography variant="h1">Navbar</Typography>
    </AppBar>
  );
}

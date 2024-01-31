import { AppBar, Container, Typography } from '@mui/material';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <AppBar className={styles.navbar}>
      <Container maxWidth="xl">
        <Typography variant="h1">Navbar</Typography>
      </Container>
    </AppBar>
  );
}

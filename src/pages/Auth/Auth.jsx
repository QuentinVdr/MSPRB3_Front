import LoginForm from '@components/auth/login/Login';
import { Box } from '@mui/material';
import styles from './Auth.module.scss';

export default function Auth() {
  return (
    <div className={styles.authPage}>
      <Box className={styles.authForm}>
        <LoginForm />
      </Box>
    </div>
  );
}

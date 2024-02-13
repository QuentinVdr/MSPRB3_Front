import SignInForm from '@components/auth/SignInForm/SignInForm';
import { Stack, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import styles from './Auth.module.scss';

export default function Auth() {
  const [tab, setTab] = useState('sign-in');

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className={styles.authPage}>
      <Stack direction="column" gap={4} className={styles.authForm}>
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="connection" value="sign-in" />
          <Tab label="inscription" value="sign-up" />
        </Tabs>
        {tab === 'sign-in' && <SignInForm />}
        {tab === 'sign-up' && <div>TODO: Inscription</div>}
      </Stack>
    </div>
  );
}

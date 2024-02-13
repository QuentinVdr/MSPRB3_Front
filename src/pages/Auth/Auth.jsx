import { Button, FormControl, Stack, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import styles from './Auth.module.scss';

export default function Auth() {
  const { handleSubmit, reset, control } = useForm();

  const onSubmitLogin = (data) => {
    const { email, password } = data;
    console.log(`email: ${email}, password: ${password}`);
  };

  return (
    <div className={styles.authPage}>
      <Stack direction="column" gap={2} className={styles.authForm}>
        <FormControl fullWidth variant="outlined">
          <Stack direction="column" gap={1}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: 'Requis',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'adresse mail invalide'
                }
              }}
              render={({ field: fieldState, fieldState: { error } }) => (
                <TextField {...fieldState} label="Email" error={!!error} helperText={error ? error.message : null} />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: 'Requis'
              }}
              render={({ field: fieldState, fieldState: { error } }) => (
                <TextField
                  {...fieldState}
                  label="Mot de passe"
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Stack>
        </FormControl>

        <Stack direction="row" gap={2}>
          <Button variant="outlined" onClick={reset}>
            Annuler
          </Button>
          <Button variant="contained" onClick={handleSubmit(onSubmitLogin)}>
            Connecter
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}

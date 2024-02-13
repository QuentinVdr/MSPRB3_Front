import { Button, Checkbox, FormControl, FormControlLabel, Stack, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

export default function SignUpForm() {
  const { handleSubmit, reset, control } = useForm();

  const onSubmitLogin = (data) => {
    const { firstName, lastName, email, password, isBotanist } = data;
    console.log('🚀 ~ onSubmitLogin ~ :', { firstName, lastName, email, password, isBotanist });
  };

  return (
    <Stack direction="column" gap={3}>
      <FormControl fullWidth variant="outlined">
        <Stack direction="column" gap={2}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{
              required: 'Requis'
            }}
            render={({ field: fieldState, fieldState: { error } }) => (
              <TextField {...fieldState} label="Prénom" error={!!error} helperText={error ? error.message : null} />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{
              required: 'Requis'
            }}
            render={({ field: fieldState, fieldState: { error } }) => (
              <TextField {...fieldState} label="Nom" error={!!error} helperText={error ? error.message : null} />
            )}
          />
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
          <Controller
            name="isBotanist"
            control={control}
            defaultValue=""
            render={({ field: fieldState }) => (
              <FormControlLabel label="Êtes vous un botaniste" control={<Checkbox {...fieldState} />} />
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
  );
}

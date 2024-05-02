import { useAuth } from '@hooks/contexts/useAuth';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import { useSnackbarStore } from '@stores/SnackbarStore';
import { defaultUsers } from '@stores/dataStore/UserStore';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function SignInForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { showSuccess, showError } = useSnackbarStore();
  const { handleSubmit, reset, control } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitLogin = ({ mail, password }) => {
    let isLog = false;
    defaultUsers.forEach((user) => {
      if (mail === user.mail && password === user.password) {
        isLog = true;
        login(user);
        showSuccess({ message: 'Connecter avec sucées' });
        navigate('/');
      }
    });
    if (!isLog) {
      showError({ message: 'Identification invalide' });
    }
  };

  return (
    <Stack direction="column" gap={3}>
      <FormControl fullWidth variant="outlined">
        <Stack direction="column" gap={2}>
          <Controller
            name="mail"
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
              <TextField {...fieldState} label="Mail" error={!!error} helperText={error ? error.message : null} />
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
                type={showPassword ? 'text' : 'password'}
                error={!!error}
                helperText={error ? error.message : null}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword((currentShow) => !currentShow)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
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
  );
}

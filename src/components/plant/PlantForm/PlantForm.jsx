import { Button, FormControl, Grid, Stack, TextField } from '@mui/material';
import { useSnackbarStore } from '@stores/SnackbarStore';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';

PlantForm.propTypes = {
  afterValidation: PropTypes.func,
  afterCancel: PropTypes.func
};

export default function PlantForm({ afterValidation, afterCancel }) {
  const { showSuccess } = useSnackbarStore();
  const { handleSubmit, reset, control } = useForm();

  const onSubmitPlant = () => {
    showSuccess({ message: 'Plante créer avec succès' });
    afterValidation();
  };

  const handleCancel = () => {
    reset();
    afterCancel();
  };

  return (
    <Grid container direction="column" gap={3} justifyContent="center">
      <FormControl fullWidth variant="outlined">
        <Stack direction="column" gap={2}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: 'Requis'
            }}
            render={({ field: fieldState, fieldState: { error } }) => (
              <TextField
                {...fieldState}
                label="Nom de la plante"
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field: fieldState, fieldState: { error } }) => (
              <TextField
                {...fieldState}
                label="Description de la plante"
                multiline
                rows={4}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name="address"
            control={control}
            defaultValue=""
            rules={{
              required: 'Requis'
            }}
            render={({ field: fieldState, fieldState: { error } }) => (
              <TextField {...fieldState} label="Adresse" error={!!error} helperText={error ? error.message : null} />
            )}
          />
          <Controller
            name="city"
            control={control}
            defaultValue=""
            rules={{
              required: 'Requis'
            }}
            render={({ field: fieldState, fieldState: { error } }) => (
              <TextField {...fieldState} label="Ville" error={!!error} helperText={error ? error.message : null} />
            )}
          />
        </Stack>
      </FormControl>

      <Stack direction="row" gap={2} justifyContent="center">
        <Button variant="outlined" onClick={handleCancel}>
          Annuler
        </Button>
        <Button variant="contained" onClick={handleSubmit(onSubmitPlant)}>
          Créer
        </Button>
      </Stack>
    </Grid>
  );
}

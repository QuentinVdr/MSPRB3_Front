import { Button, Checkbox, FormControl, FormControlLabel, Grid, Stack, TextField, Typography } from '@mui/material';
import { useSnackbarStore } from '@stores/SnackbarStore';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';

PlantForm.propTypes = {
  afterValidation: PropTypes.func,
  afterCancel: PropTypes.func,
  defaultPlant: PropTypes.object
};

export default function PlantForm({ afterValidation, afterCancel, defaultPlant }) {
  const { showSuccess } = useSnackbarStore();
  const { handleSubmit, reset, control } = useForm({ defaultValues: defaultPlant });

  const onSubmitPlant = ({ name, description, address, city, postalCode, isNeedingCare, isNeedingTips }) => {
    console.log(
      '🚀 ~ onSubmitPlant ~ { name, description, address, city, postalCode, isNeedingCare, isNeedingTips }:',
      {
        name,
        description,
        address,
        city,
        postalCode,
        isNeedingCare,
        isNeedingTips
      }
    );
    showSuccess({ message: 'Plante créer avec succès' });
    afterValidation();
  };

  const handleCancel = () => {
    reset();
    afterCancel();
  };

  return (
    <Grid container direction="column" gap={3} justifyContent="center">
      <Typography variant="h4">{defaultPlant ? `Modifier ${defaultPlant.name}` : 'Créer une plante'}</Typography>
      <FormControl fullWidth variant="outlined">
        <Stack direction="column" gap={2}>
          <Controller
            name="name"
            control={control}
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
            rules={{
              required: 'Requis'
            }}
            render={({ field: fieldState, fieldState: { error } }) => (
              <TextField {...fieldState} label="Ville" error={!!error} helperText={error ? error.message : null} />
            )}
          />
          <Controller
            name="postalCode"
            control={control}
            rules={{
              required: 'Requis'
            }}
            render={({ field: fieldState, fieldState: { error } }) => (
              <TextField
                {...fieldState}
                label="Code postal"
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name="isNeedingCare"
            control={control}
            render={({ field: fieldState }) => (
              <FormControlLabel
                label="A besoin de soin"
                control={<Checkbox {...fieldState} checked={fieldState.value} />}
              />
            )}
          />
          <Controller
            name="isNeedingTips"
            control={control}
            render={({ field: fieldState }) => (
              <FormControlLabel
                label="A besoin de conseil"
                control={<Checkbox {...fieldState} checked={fieldState.value} />}
              />
            )}
          />
        </Stack>
      </FormControl>

      <Stack direction="row" gap={2} justifyContent="center">
        <Button variant="outlined" onClick={handleCancel}>
          Annuler
        </Button>
        <Button variant="contained" onClick={handleSubmit(onSubmitPlant)}>
          {defaultPlant ? 'Modifier' : 'Créer'}
        </Button>
      </Stack>
    </Grid>
  );
}

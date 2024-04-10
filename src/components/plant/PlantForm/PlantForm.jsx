import { UploadButton } from '@bytescale/upload-widget-react';
import { useAuth } from '@hooks/contexts/useAuth';
import { useAddressDetailQuery } from '@hooks/reactQuery/queries/useAddressQueries';
import { Button, Checkbox, FormControl, FormControlLabel, Grid, Stack, TextField, Typography } from '@mui/material';
import { useSnackbarStore } from '@stores/SnackbarStore';
import { usePlantsStore } from '@stores/dataStore/PlantsStore';
import { Strings } from '@utils/StringUtils';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

PlantForm.propTypes = {
  afterValidation: PropTypes.func,
  afterCancel: PropTypes.func,
  defaultPlant: PropTypes.object
};

export default function PlantForm({ afterValidation, afterCancel, defaultPlant }) {
  const { user } = useAuth();
  const addPlant = usePlantsStore((state) => state.addPlant);
  const updatePlant = usePlantsStore((state) => state.updatePlant);
  const { showSuccess } = useSnackbarStore();

  const { handleSubmit, reset, control, getValues } = useForm({ defaultValues: defaultPlant });
  const [plantFullAddress, setPlantFullAddress] = useState('');
  const { data: addressDetail } = useAddressDetailQuery(plantFullAddress, {
    enabled: Strings.isNotBlank(plantFullAddress)
  });

  useEffect(() => {
    if (addressDetail?.features[0]?.properties) {
      handlePlantSave();
    }
  }, [addressDetail]);

  const options = {
    apiKey: import.meta.env.VITE_API_FILES_BUCKET_KEY,
    maxFileCount: 5
  };

  const onSubmitPlant = () => {
    setPlantFullAddress(`${getValues().address} ${getValues().postalCode} ${getValues().city}`);
  };

  const handlePlantSave = () => {
    const { lat, lon } = addressDetail.features[0].properties;
    const plant = {
      ...getValues(),
      latitude: lat,
      longitude: lon,
      owner: user
    };
    defaultPlant ? updatePlant({ ...plant, id: defaultPlant.id }) : addPlant(plant);
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
          <Controller
            name="images"
            control={control}
            render={({ field: { onChange } }) => (
              <UploadButton options={options} onComplete={(files) => onChange(files.map((x) => x.fileUrl))}>
                {({ onClick }) => (
                  <Button onClick={onClick} variant="outlined">
                    Ajouter des images
                  </Button>
                )}
              </UploadButton>
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

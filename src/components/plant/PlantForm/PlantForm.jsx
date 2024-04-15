import { useAuth } from '@hooks/contexts/useAuth';
import { useUploadImagesMutation } from '@hooks/reactQuery/mutation/useImgBBMutations';
import { useAddressDetailQuery } from '@hooks/reactQuery/queries/useAddressQueries';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  Badge,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography
} from '@mui/material';
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
  const { mutateAsync: uploadImage } = useUploadImagesMutation();
  const [plantFullAddress, setPlantFullAddress] = useState('');
  const { data: addressDetail } = useAddressDetailQuery(plantFullAddress, {
    enabled: Strings.isNotBlank(plantFullAddress)
  });

  useEffect(() => {
    if (addressDetail?.features[0]?.properties) {
      handlePlantSave();
    }
  }, [addressDetail]);

  const onSubmitPlant = () => {
    setPlantFullAddress(`${getValues().address} ${getValues().postalCode} ${getValues().city}`);
  };

  const handleImageUpload = async () => {
    const images = Object.values(getValues().images);
    const imagesData = images ? await uploadImage(images) : [];
    return imagesData.map((imageData) => imageData.data.url);
  };

  const handlePlantSave = async () => {
    const { lat, lon } = addressDetail.features[0].properties;
    const plant = {
      ...getValues(),
      images: await handleImageUpload(),
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
          <Stack alignItems="center">
            <Controller
              name="images"
              defaultValue={[]}
              control={control}
              render={({ field: { onChange, ...field } }) => (
                <Badge badgeContent={field.value?.length} color="primary">
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload file
                    <input
                      type="file"
                      hidden
                      multiple
                      onChange={(event) => {
                        onChange(event.target.files);
                      }}
                    />
                  </Button>
                </Badge>
              )}
            />
          </Stack>
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

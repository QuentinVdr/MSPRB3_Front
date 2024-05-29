import { useAuth } from '@hooks/contexts/useAuth';
import MessageIcon from '@mui/icons-material/Message';
import { Modal, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PlantDetail.module.scss';

PlantDetail.propTypes = {
  isPlantDetailOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  plant: PropTypes.object
};

export default function PlantDetail({ isPlantDetailOpen, handleClose, plant }) {
  const { isAuthenticated } = useAuth();

  return (
    <Modal open={isPlantDetailOpen} onClose={handleClose} className={styles.plantDetailModal}>
      <Stack gap={3} className={styles.plantDetailCard} justifyContent="space-between">
        <Typography variant="h2">{plant?.name}</Typography>
        <Typography variant="body1">{plant?.description}</Typography>
        <Stack direction="row" flexWrap="nowrap" className={styles.plantImages}>
          {plant?.images?.map((image, index) => (
            <img key={image} src={image} alt={`the plant ${plant?.name} ${index}`} className={styles.plantImage} />
          ))}
        </Stack>
        {isAuthenticated() && (
          <Typography variant="body1">
            <Link to={`chat/${plant?.owner.id}`}>
              <Stack direction="row" alignItems="center" gap={1}>
                <MessageIcon />
                Envoyer un message
              </Stack>
            </Link>
          </Typography>
        )}
      </Stack>
    </Modal>
  );
}

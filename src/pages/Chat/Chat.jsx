import SendIcon from '@mui/icons-material/Send';
import { Grid, IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import { useUsersStore } from '@stores/dataStore/UserStore';
import styles from './Chat.module.scss';

export default function Chat() {
  const user = useUsersStore((state) => state.getById(2));

  return (
    <Grid container justifyContent="space-between" className={styles.chatPage}>
      <h1>
        Discussion avec {user.firstName} {user.lastName}
      </h1>
      <Stack direction="column">
        <></>
      </Stack>
      <Stack className={styles.input}>
        <TextField
          placeholder="saisir un message"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="primary">
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
          fullWidth
        ></TextField>
      </Stack>
    </Grid>
  );
}

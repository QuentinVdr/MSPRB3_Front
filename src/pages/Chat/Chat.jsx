import { useAuth } from '@hooks/contexts/useAuth';
import { usePostMessagesMutation } from '@hooks/reactQuery/mutation/useMessagesMutations';
import { useMessagesQuery } from '@hooks/reactQuery/queries/useMessagesQueries';
import SendIcon from '@mui/icons-material/Send';
import { Grid, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useUsersStore } from '@stores/dataStore/UserStore';
import { Strings } from '@utils/StringUtils';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Chat.module.scss';

export default function Chat() {
  const { user } = useAuth();
  const { otherUserId } = useParams();
  const otherUser = useUsersStore((state) => state.getById(parseInt(otherUserId)));
  const { data: messages, isLoading } = useMessagesQuery(user.id, otherUserId);
  console.log('🚀 ~ Chat ~ messages:', messages);
  const [message, setMessage] = useState('');
  const postMessage = usePostMessagesMutation();

  const handleSendMessage = () => {
    if (Strings.isBlank(message)) return null;
    postMessage.mutateAsync({
      id: undefined,
      content: message,
      datetime: new Date(),
      sender: user,
      receiver: otherUser
    });
    setMessage('');
  };

  return (
    <Grid container direction="column" justifyContent="space-between" className={styles.chatPage}>
      <h1>
        Discussion avec {otherUser.firstName} {otherUser.lastName}
      </h1>
      <Stack direction="column" gap={2} className={styles.chat}>
        {isLoading ? (
          <Typography variant="body1">Chargement...</Typography>
        ) : (
          messages.map((message) => (
            <Stack key={message.id} className={styles.message}>
              <Typography variant="body2">
                {message.sender.firstName} {message.sender.lastName}
              </Typography>
              <Typography variant="body1">{message.content}</Typography>
            </Stack>
          ))
        )}
      </Stack>
      <Stack className={styles.input}>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="saisir un message"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="primary" onClick={handleSendMessage}>
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

import { useAuth } from '@hooks/contexts/useAuth';
import { usePostMessagesMutation } from '@hooks/reactQuery/mutation/useMessagesMutations';
import { useDiscussionsBetweenUsersQuery } from '@hooks/reactQuery/queries/useDiscussionsQueries';
import SendIcon from '@mui/icons-material/Send';
import { Grid, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useUsersStore } from '@stores/dataStore/UserStore';
import { Strings } from '@utils/StringUtils';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Chat.module.scss';

export default function Chat() {
  const { user } = useAuth();
  const { otherUserId } = useParams();
  const otherUser = useUsersStore((state) => state.getById(parseInt(otherUserId)));
  const { data: discussion, isLoading, refetch } = useDiscussionsBetweenUsersQuery(user?.id, otherUserId);
  const [message, setMessage] = useState('');
  const postMessage = usePostMessagesMutation();

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 2000);
    return () => clearInterval(interval);
  }, [refetch]);

  const handleSendMessage = () => {
    if (Strings.isBlank(message)) return null;
    postMessage.mutateAsync({
      content: message,
      datetime: new Date(),
      sender: user,
      discussionId: discussion.id
    });
    setMessage('');
    refetch();
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
          discussion?.messages?.map((message) => (
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

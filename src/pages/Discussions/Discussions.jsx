import { useAuth } from '@hooks/contexts/useAuth';
import { useDiscussionsOfUserQuery } from '@hooks/reactQuery/queries/useDiscussionsQueries';
import MessageIcon from '@mui/icons-material/Message';
import { CircularProgress, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Discussions.module.scss';

export default function Discussions() {
  const { user } = useAuth();
  const { data: discussions, isLoading } = useDiscussionsOfUserQuery(user?.id);
  console.log('🚀 ~ Discussions ~ discussions:', discussions);

  return (
    <Grid container direction="column" gap={4} className={styles.discussionsPage}>
      <Typography variant="h1">
        Discussions de {user.firstName} {user.lastName}
      </Typography>
      {isLoading ? (
        <Stack alignItems="center">
          <CircularProgress />
        </Stack>
      ) : (
        <Grid container direction="column" gap={2}>
          {discussions?.map((discussion) => {
            const otherMember = discussion.members.find((member) => member.id !== user.id);
            return (
              <Grid
                item
                key={discussion.id}
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                className={styles.discussionCard}
              >
                <Typography>
                  {otherMember.firstName} {otherMember.lastName}
                </Typography>
                <Link to={`/chat/${discussion.id}`} className={styles.discussionLink}>
                  <MessageIcon />
                  Accéder à la discussion
                </Link>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Grid>
  );
}

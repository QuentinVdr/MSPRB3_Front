import ArticleForm from '@components/article/ArticleForm/ArticleForm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid, IconButton, Modal, Stack, Typography } from '@mui/material';
import { useSnackbarStore } from '@stores/SnackbarStore';
import { useArticleStore } from '@stores/dataStore/ArticlesStore';
import { useState } from 'react';
import styles from './Articles.module.scss';

export default function Articles() {
  const articles = useArticleStore((state) => state.articles);
  const removeArticle = useArticleStore((state) => state.removeArticle);
  const { showSuccess } = useSnackbarStore();
  const [selectedArticle, setSelectedArticle] = useState(articles[0]);
  const [selectedArticleUpdate, setSelectedArticleUpdate] = useState(null);
  const [isArticleFormOpen, setIsArticleFormOpen] = useState(false);

  const handleOpen = () => {
    setIsArticleFormOpen(true);
  };

  const handleUpdate = (article) => {
    setSelectedArticleUpdate(article);
    setIsArticleFormOpen(true);
  };

  const handleDelete = (article) => {
    removeArticle(article.id);
    showSuccess({ message: `L'articles ${article.title} à été supprimé` });
  };

  const handleClose = () => {
    setSelectedArticleUpdate(null);
    setIsArticleFormOpen(false);
  };

  return (
    <>
      <Grid
        container
        direction={{ xs: 'column', md: 'row-reverse' }}
        columnSpacing={3}
        rowGap={2}
        wrap="nowrap"
        className={styles.articlesPage}
      >
        <Grid
          item
          xs={8}
          md={9}
          container
          direction="column"
          gap={2}
          className={styles.articleDetailSection}
          wrap="nowrap"
        >
          <Typography variant="h2">Article detail</Typography>
          <Stack direction="column" gap={2} className={styles.selectedArticleDetail}>
            <Typography variant="h2">{selectedArticle.title}</Typography>
            <Grid container direction="row" spacing={1}>
              <Grid item xs={12}>
                <Typography variant="body1">{selectedArticle.description}</Typography>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={4} md={3} className={styles.articlesListSection}>
          <Stack direction="column" gap={2} className={styles.articlesListSectionContent}>
            <Typography variant="h2">Liste d&apos;article</Typography>
            <Stack direction="column" gap={1} className={styles.articlesList}>
              {articles.map((article) => (
                <Stack
                  key={`${article.id} ${article.title}`}
                  onClick={() => setSelectedArticle(article)}
                  className={
                    styles.myArticlesCard + (article == selectedArticle ? ` ${styles.selectedArticleCard}` : '')
                  }
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="body1">{article.title}</Typography>
                  <Stack direction="row">
                    <IconButton onClick={() => handleUpdate(article)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(article)}>
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              ))}
            </Stack>
            <Button variant="contained" onClick={handleOpen} className={styles.addArticleButton}>
              Ajouter un nouvel article
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Modal open={isArticleFormOpen} onClose={handleClose} className={styles.articleFormModal}>
        <Stack gap={3} className={styles.articleFormCard}>
          <ArticleForm afterValidation={handleClose} afterCancel={handleClose} defaultArticle={selectedArticleUpdate} />
        </Stack>
      </Modal>
    </>
  );
}

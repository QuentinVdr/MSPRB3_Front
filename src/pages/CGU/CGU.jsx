import { Stack, Typography } from '@mui/material';
import styles from './CGU.module.scss';

export default function CGU() {
  return (
    <Stack direction="column" gap={6} className={styles.cguPage}>
      <Stack gap={2}>
        <Typography variant="h1" textAlign="center">
          Mention légales
        </Typography>
        <Stack gap={1}>
          <Typography variant="body1">
            Forme sociale : SAS (Société par actions simplifiée) au capital de 10 000 euros
          </Typography>
          <Typography variant="body1">
            Immatriculation au registre du commerce et des sociétés : Nantes 888 777 666.
          </Typography>
          <Typography variant="body1">Numéro de TVA intracommunautaire : FR32521724347</Typography>
          <Typography variant="body1">Siège social : 12 rue des Fleurs, 44000 Nantes, France.</Typography>
          <Typography variant="body1">Directrice de Publication : M. Martin Dupont.</Typography>
          <Typography variant="body1">
            Hébergeur du Site et des Applications : société Vercel Inc - 440 N Barranca Ave #4133 - Covina - CA 91723
          </Typography>
          <Typography variant="body1">
            Localisation de l&apos;hébergement des données du Site et des Applications : Europe
          </Typography>
          <Typography variant="body1">
            Conformément à l&apos;article 24-2 du Règlement (UE) 2022/2065 (dit « Digital Services Act »), LBC France
            publie tous les six mois des informations relatives à la moyenne mensuelle des destinataires actifs du site
            arosaje.fr sur le semestre écoulé.
          </Typography>
        </Stack>
      </Stack>

      <Stack gap={2}>
        <Typography variant="h1" textAlign="center">
          Conditions général d&apos;utilisations
        </Typography>
        <Stack gap={2}>
          <Stack>
            <Typography variant="h2">Finalité de la collecte des données :</Typography>
            <ul className={styles.list}>
              <li>
                <Typography variant="body1">
                  Les données récupérées telles que l&apos;email, le nom, le prénom et le mot de passe sont des données
                  utilisées pour l&apos;authentification de l&apos;application.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  L&apos;adresse postale est utilisée pour nous permettre de localiser la plante qui à besoin
                  d&apos;entretien
                </Typography>
              </li>
            </ul>
          </Stack>
          <Stack>
            <Typography variant="h2">Destinataires des données :</Typography>
            <ul className={styles.list}>
              <li>
                <Typography variant="body1">
                  Les personnes qui auront accès aux données collectées seront les personnes en charge de
                  l&apos;application et l&apos;adresse des plantes sera partagée aux autres utilisateurs.
                </Typography>
              </li>
            </ul>
          </Stack>
          <Stack>
            <Typography variant="h2">Durée de conservation des données :</Typography>
            <ul className={styles.list}>
              <li>
                <Typography variant="body1">
                  Les données collectées seront conservées pendant 3 mois après inactivité de l&apos;utilisateur ce qui
                  est le maximum légal si le consentement de l&apos;utilisateur n&apos;est pas donné pour une
                  conservation de données à long terme. Et si une conservation de longue durée est nécessaire pour
                  l&apos;application. La mise en place de la demande aux utilisateurs avec une case à cocher si
                  l&apos;utilisateur consent sera ajoutée.
                </Typography>
              </li>
            </ul>
          </Stack>
          <Stack>
            <Typography variant="h2">Droits des utilisateurs :</Typography>
            <ul className={styles.list}>
              <li>
                <Typography variant="body1">
                  informer les utilisateurs de leurs droits (ex : droit d&apos;accès, de rectification,
                  d&apos;opposition, de suppression). Pour assurer les droits des utilisateurs une base de données
                  secondaire peut être mis en place en cas d&apos;incident et d&apos;assurer aux utilisateurs la
                  disponibilité à leurs données
                </Typography>
              </li>
            </ul>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

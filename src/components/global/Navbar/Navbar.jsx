import { useAuth } from '@hooks/contexts/useAuth';
import { AccountCircle } from '@mui/icons-material';
import { AppBar, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleCloseMenu();
    navigate('/');
  };

  return (
    <AppBar className={styles.navbar} position="sticky">
      <Stack direction="row" gap={2} alignItems="center">
        <Typography variant="h1">Aros&apos;aje</Typography>
        {isAuthenticated() && (
          <>
            <Link to="/plant">
              <Typography variant="body1">Mes Plantes</Typography>
            </Link>
            <div className={styles.userMenu}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu id="menu-appbar" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
                <MenuItem onClick={handleLogout}>déconnecter</MenuItem>
              </Menu>
            </div>
          </>
        )}
      </Stack>
    </AppBar>
  );
}

import { ReactQueryProvider } from '@contexts/ReactQueryProvider';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { router } from '@routes/AppRoutes';
import { theme } from '@styles/theme';
import { RouterProvider } from 'react-router-dom';

/**
 * Component used to handle the application
 */
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <ReactQueryProvider>
          <AppRouter />
        </ReactQueryProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}

/**
 * Router provider for the application
 * @returns router provider
 */
function AppRouter() {
  return <RouterProvider router={router()} />;
}

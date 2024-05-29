import Articles from '@pages/Articles/Articles';
import Auth from '@pages/Auth/Auth';
import CGU from '@pages/CGU/CGU';
import Chat from '@pages/Chat/Chat';
import Discussions from '@pages/Discussions/Discussions';
import Home from '@pages/Home/Home';
import MyPlants from '@pages/MyPlants/MyPlants';
import { NotFound } from '@pages/NotFound/NotFound';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AuthRoute from './accessHandler/AuthRoute';
import Layout from './components/Layout';

/**
 * Componant to handle all the routes of the application
 */
export const AppRouter = () => (
  <RouterProvider
    router={createBrowserRouter(
      createRoutesFromElements(
        <Route element={<Layout />}>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/cgu" element={<CGU />} />
          {/** page required authentification */}
          <Route element={<AuthRoute />}>
            <Route path="/my-plants" element={<MyPlants />} />
            <Route path="/discussions" element={<Discussions />} />
            <Route path="/chat/:otherUserId" element={<Chat />} />
          </Route>
          <Route path="/not-found" element={<NotFound />} />
          {/** Unknown path redirection */}
          <Route path="*" element={<NotFound />} />
        </Route>
      )
    )}
  />
);

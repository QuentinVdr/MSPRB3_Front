import Auth from '@pages/Auth/Auth';
import Home from '@pages/Home/Home';
import MyPlant from '@pages/MyPlant/MyPlant';
import { NotFound } from '@pages/NotFound/NotFound';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import AuthRoute from './accessHandler/AuthRoute';
import Layout from './components/Layout';

/**
 * Variable used to handle all the routes of the application
 */
export const router = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        {/** page required authentification */}
        <Route element={<AuthRoute />}>
          <Route path="/my-plant" element={<MyPlant />} />
        </Route>
        <Route path="/not-found" element={<NotFound />} />
        {/** Unknown path redirection */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

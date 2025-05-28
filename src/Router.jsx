import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Route from '@/components/Route';
import HomePage from '@/pages/HomePage';
import ListingDetailsPage from '@/pages/ListingDetailsPage';
import ListingFavoritesPage from '@/pages/ListingFavoritesPage';
import NotFoundPage from '@/pages/NotFoundPage';
import SignInPage from '@/pages/SignInPage';

import App from './App';
import ProfilePage from './pages/ProfilePage';
import CreateListingPage from './pages/CreateListingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/signin',
        element: (
          <Route>
            <SignInPage />
          </Route>
        ),
      },
      {
        path: '/',
        element: (
          <Route isProtected>
            <HomePage />
          </Route>
        ),
      },
      {
        path: '/listings/create',
        element: (
          <Route isProtected>
            <CreateListingPage />
          </Route>
        ),
      },
      {
        path: '/listings/:listingId',
        element: (
          <Route isProtected>
            <ListingDetailsPage />
          </Route>
        ),
      },

      {
        path: '/favorites',
        element: (
          <Route isProtected>
            <ListingFavoritesPage />
          </Route>
        ),
      },
      {
        path: '/profile',
        element: (
          <Route isProtected>
            <ProfilePage />
          </Route>
        ),
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;

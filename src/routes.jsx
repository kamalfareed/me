import { createBrowserRouter } from 'react-router-dom';
import Resume from './views/Resume/Resume';
import Layout from './components/shared/layout';
import Home from './views/pages/home';
import Portfolio from './views/Portfolio/portfolio';

export const router = createBrowserRouter([
  {
    path: '/me',
    element: <Layout />,
    children: [
      {
        path: '/me',
        element: <Home />,
      },
      {
        path: '/me/resume',
        element: <Resume />,
      },
      {
        path: '/me/work',
        element: <Portfolio />,
      },
    ],
  },
]);

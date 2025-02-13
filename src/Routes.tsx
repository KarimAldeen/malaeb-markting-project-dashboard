import { FaHome } from 'react-icons/fa';
import { RoutesType } from './Module/core/types/route';

// product papp
import { AuthRoutes } from '@Module/auth/Routes';
import HomePage from '@Module/core/pages/HomePage';
import { websiteRoutes } from '@Module/website/Routes';

export const BaseRoute: RoutesType[] = [
  // product page
  {
    name: 'Home Page',
    path: '/',
    icon: <FaHome />,
    element: <HomePage />,
  },
  ...AuthRoutes,
  ...websiteRoutes
];

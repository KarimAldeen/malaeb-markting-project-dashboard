


import React from 'react';
import { RoutesType } from '@Module/core/types/route';
import { GiMatchHead } from 'react-icons/gi';
import { MdEvent } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';

const EventPage = React.lazy(
  () => import('@Module/website/pages/event/page'),
);

const MatchPage = React.lazy(
  () => import('@Module/website/pages/match/page'),
);

const UserPage = React.lazy(
  () => import('@Module/website/pages/user/page'),
);
export const websiteRoutes: RoutesType[] = [

  {
    path: '/event',
    name: 'event',
    icon: <MdEvent />,
    element: <EventPage />,
  },
  {
    path: '/match',
    name: 'match',
    icon: <GiMatchHead />,
    element: <MatchPage />,
  },

  {
    path: '/users',
    name: 'users',
    icon: <BiUser />,
    element: <UserPage />,
  },
];


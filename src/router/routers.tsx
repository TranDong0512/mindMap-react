/** @format */

import { PublicLayout } from "@/layout/PublicLayout";
import { Component, JSX, Props, ReactDom, VirtualDom, Vite, WhatReact } from "@/page/admin";
import State from "@/page/admin/State";
import { NotFound } from "@/page/NotFound/NotFound";

export const publicRouter = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: 'react', element: <WhatReact /> },
      { path: 'vite', element: <Vite /> },
      { path: 'react-dom', element: <ReactDom /> },
      { path: 'virtual-dom', element: <VirtualDom /> },
      { path: 'jsx', element: <JSX /> },
      { path: 'component', element: <Component /> },
      { path: 'props', element: <Props /> },
      { path: 'state', element: <State /> },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

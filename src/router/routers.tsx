/** @format */

import { PublicLayout } from "@/layout/PublicLayout";
import { Component, HOC, Hooks, JSX, Lifecycle, Props, ReactDom, State, UseEffectComponent, VirtualDom, Vite, WhatReact } from "@/page/admin";
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
      { path: 'useEffect', element: <UseEffectComponent /> },
      { path: 'lifecycle', element: <Lifecycle /> },
      { path: 'hoc', element: <HOC /> },
      { path: 'hooks', element: <Hooks /> },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

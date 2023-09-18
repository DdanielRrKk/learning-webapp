import React from 'react';

import ErrorPage from './pages/errorPage';

import HomePage from './pages/main/homePage';
import CoursePage from './pages/main/coursePage';
import WritePage from './pages/main/writePage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/course/:courseId",
      element: <CoursePage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/write",
      element: <WritePage />,
      errorElement: <ErrorPage />
    }
  ]);
  
  return <RouterProvider router={router} />;
}

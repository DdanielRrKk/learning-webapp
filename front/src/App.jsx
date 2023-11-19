import React from 'react';

import ErrorPage from './view/pages/errorPage';

import HomePage from './view/pages/homePage';
import CoursePage from './view/pages/coursePage';
import SupportPage from './view/pages/supportPage';

import CreateCoursePage from './view/pages/createCoursePage';
import WritePage from './view/pages/writePage';
import FeedbackPage from './view/pages/feedbackPage';

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
      path: "/create",
      element: <CreateCoursePage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/support",
      element: <SupportPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/feedback/:feedbackId",
      element: <FeedbackPage />,
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

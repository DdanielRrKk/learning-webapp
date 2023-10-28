import React from 'react';

import ErrorPage from './pages/errorPage';

import HomePage from './pages/main/homePage';
import CoursePage from './pages/main/coursePage';
import SupportPage from './pages/main/supportPage';

import CreateCoursePage from './pages/support/createCoursePage';
import WritePage from './pages/support/writePage';
import FeedbackPage from './pages/support/feedbackPage';

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

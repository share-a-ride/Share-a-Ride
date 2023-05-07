import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import LoginForm from "../views/login";
import HomePage from "../views/home";
import UnverifiedUserList from "../views/verify";
import VerifiedUsersPage from "../views/users";
import RidesList from "../views/rides";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/unverified-users",
        element: <UnverifiedUserList />,
      },
      {
        path: "/users",
        element: <VerifiedUsersPage />,
      },
      {
        path: "/rides",
        element: <RidesList />,
      },
    ],
  },
]);

export default router;

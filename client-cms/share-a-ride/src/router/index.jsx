import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../components/layout";
import LoginForm from "../views/login";
import HomePage from "../views/home";
import UnverifiedUserList from "../views/verify";
import VerifiedUsersPage from "../views/users";
import RidesList from "../views/rides";
import EditUsers from "../views/edit";

const router = createBrowserRouter([
  {
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      }

      return null;
    },
    path: "/login",
    element: <LoginForm />,
  },
  {
    loader: () => {
      if (!localStorage.access_token) {
        return redirect("/login");
      }

      return null;
    },
    element: <Layout />,
    children: [
      {
        path: "users/:id",
        element: <EditUsers />,
      },
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "unverified-users",
        element: <UnverifiedUserList />,
      },
      {
        path: "users",
        element: <VerifiedUsersPage />,
       
      },
      {
        path: "rides",
        element: <RidesList />,
      },
      
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);


export default router;

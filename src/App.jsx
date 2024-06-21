import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Products from "./pages/Products";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user")) ?? false;

    return user ? children : <Navigate to={"/login"} />;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

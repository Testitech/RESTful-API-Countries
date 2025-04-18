import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"; // Ensure App is imported
import Details from "./[name]/Details"; // Dynamic route component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details/:name", // Dynamic route for country details
    element: <Details />,
  },

  {
    path: "*",
    element: (
      <div className="flex justify-center items-center h-screen">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5613/5613910.png"
          alt="404"
          className="w-1/4 h-1/4"
        />
        <h1 className="text-4xl font-bold font-[Nunito sans]">
          404 Page not found
        </h1>
      </div>
    ),
  },

  {
    basename: "/RESTful-API-Countries",
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

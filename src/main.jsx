import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"; // Ensure App is imported
import Details from "./[name]/Details"; // Dynamic route component

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/details/:name",
      element: <Details />,
    },
    {
      path: "*",
      element: (
        <div className="flex items-center justify-center h-screen font-[Nunito sans] font-bold">
          <h1 className="text-4xl">404 Not Found</h1>
        </div>
      ),
    },
  ],
  {
    basename: "/RESTful-API-Countries",
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

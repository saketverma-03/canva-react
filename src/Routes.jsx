import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Editor from "./pages/Editor";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Outlet />
      </App>
    ),
    children: [
      {
        path: "/",
        element: <Editor />,
      },
      {
        path: "/editor",
        element: <App />,
      },
    ],
  },
]);

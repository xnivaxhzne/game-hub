import { createBrowserRouter } from "react-router";
import GameDetailsPage from "./pages/GameDetailPage";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: "games/:id",
        Component: GameDetailsPage
      }
    ]
  }
]);

export default router;

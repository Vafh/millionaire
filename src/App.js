import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ErrorPage } from "./pages/errorPage";
import { GameOverPage } from "./pages/gameOverPage";
import { HomePage } from "./pages/homePage";
import { QuestionPage } from "./pages/questionPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "question/:questionNumber",
      element: <QuestionPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "end",
      element: <GameOverPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

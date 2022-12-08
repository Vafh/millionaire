import { Route, Routes } from "react-router-dom";

import { ErrorPage } from "./pages/errorPage";
import { GameOverPage } from "./pages/gameOverPage";
import { HomePage } from "./pages/homePage";
import { QuestionPage } from "./pages/questionPage";

function App() {
  return (
    <Routes>
      <Route path= "/" element={ <HomePage /> }/>
      <Route path= "question/:questionNumber" element={ <QuestionPage /> }/>
      <Route path= "end" element={ <GameOverPage /> }/>
      <Route path= "*" element={ <ErrorPage /> }/>
    </Routes>
  )
}

export default App;

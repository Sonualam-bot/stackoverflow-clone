import { Routes, Route } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import Questions from "./pages/questions/Questions";
import AskQuestion from "./pages/askQuestion/AskQuestion";
import RequiresAuth from "./components/requiresAuth/RequiresAuth";
import DisplayQuestions from "./pages/questions/DisplayQuestions";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/Questions" element={<Questions />} />
      <Route
        path="/AskQuestion"
        element={
          <RequiresAuth>
            <AskQuestion />
          </RequiresAuth>
        }
      />
      <Route path="/Questions/:id" element={<DisplayQuestions />} />
    </Routes>
  );
}

export default AllRoutes;

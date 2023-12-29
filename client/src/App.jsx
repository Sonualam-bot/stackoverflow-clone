import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/navbar/Navbar";
import { fetchAllQuestions } from "./actions/Question.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;

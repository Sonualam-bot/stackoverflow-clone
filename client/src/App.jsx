import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/navbar/Navbar";
import { fetchAllQuestions } from "./actions/Question.action";
import { fetchAllUsers } from "./actions/Users.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;

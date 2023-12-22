import { Routes, Route } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
    </Routes>
  );
}

export default AllRoutes;

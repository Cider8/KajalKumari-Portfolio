import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home"; // assuming you have a Home page

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        {/* Toast container should be outside Routes */}
        <ToastContainer position="top-right" autoClose={3000} />

        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

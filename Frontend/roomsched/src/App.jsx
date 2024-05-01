import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Authentication/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;

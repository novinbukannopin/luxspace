import { Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";

function App() {
  return (
    <Routes>
      <Route index path="" element={<Homepage />} />
    </Routes>
  );
}

export default App;

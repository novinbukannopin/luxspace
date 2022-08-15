import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Details from "./pages/Details";

function App() {
  return (
    <Routes>
      <Route exact index path="" element={<Homepage />} />
      <Route path="/categories/:idc" element={<Details />} />
    </Routes>
  );
}

export default App;

import { Routes, Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Congratulation from "./pages/Congratulation";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
        <Route exact index path="" element={<Homepage />} />
        <Route path="/categories/:idc" element={<Details />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/congratulation" element={<Congratulation />}></Route>
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;

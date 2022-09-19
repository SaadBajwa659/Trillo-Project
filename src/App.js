// import "./App.scss";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notification from "./pages/Notification";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notifications" element={<Notification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

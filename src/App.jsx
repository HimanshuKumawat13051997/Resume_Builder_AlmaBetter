import "./App.css";
import { DetailsAddition } from "./Pages/DetailsAddition";
import Home from "./Pages/Home";
import { MainTemplate } from "./Pages/Maintemplate";
import { AboutUs } from "./Pages/AboutUs";
import { MyResume } from "./Pages/MyResume";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route exact path="/" element={<MainTemplate />} />
        <Route exact path="/createresume" element={<DetailsAddition />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/MyResume" element={<MyResume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

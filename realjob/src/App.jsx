import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Jobs from "./Pages/Jobs";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./paginas/AboutPage";
import HomePage from "./paginas/HomePage";
import LoginPage from "./paginas/LoginPage";
import ComponenteNav from "./Components/ComponenteNav";


function App() {
  return (
    <BrowserRouter>
      <ComponenteNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from "./pages/HomePage/HomePage";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Footer from "./components/footer/Footer";
import ContactPage from "./pages/ContactPage/ContactPage";
import HighLightPage from "./pages/HighLightPage/HighLightPage";
import Favorites from "./pages/Favorites/Favorites";
import SocialContact from "./components/SocialContact/SocialContact";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SocialContact />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/highlightpage" element={<HighLightPage />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Bottombg from './components/Bottombg';
import Form from './components/Form';
import Login from './components/Login';
import Signup from './components/signup';

function App() {
  return (
    <BrowserRouter>  {/* ✅ Wrap everything inside BrowserRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Bottombg /> {/* ✅ Now it has access to useLocation() */}
    </BrowserRouter>
  );
}

export default App;

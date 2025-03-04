import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Bottombg from './components/Bottombg';
import Form from './components/Form'
import Login from './components/Login'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/form' element={<Form />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Bottombg />
    </>
  );
}

export default App;

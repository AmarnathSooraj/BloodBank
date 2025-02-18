import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Bottombg from './components/Bottombg';
import Form from './components/Form'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </BrowserRouter>
      <Bottombg />
    </>
  );
}

export default App;

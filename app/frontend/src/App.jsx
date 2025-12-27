import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeDisplay from './pages/master/home/home';
import AboutUsDisplay from './pages/master/aboutus/aboutus';
import BlogDisplay from './pages/master/blog/blog';
import ContactUsDisplay from './pages/master/contactus/contactus';
import './App.css';

function App() {

  return (
  <Router>
    <Routes>
      <Route  path="/" element={<HomeDisplay/>}></Route>
      <Route  path="/aboutus" element={<AboutUsDisplay/>}></Route>
      <Route  path="/blog" element={<BlogDisplay/>}></Route>
      <Route  path="/contactus" element={<ContactUsDisplay/>}></Route>
    </Routes>
  </Router>
  )
}

export default App

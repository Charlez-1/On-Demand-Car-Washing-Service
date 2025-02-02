import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="booking" element={<Booking />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="pricing" element={<Pricing />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;

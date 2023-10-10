import "./App.css";
import Login from "./pages/forms/login"
import Signup from "./pages/forms/signup"
import Contacts from "./pages/contacts"
import About from "./pages/about"
import Home from "./pages/home"
import Authenticate from "./pages/authenticate"
import Navbar from "./components/navbar"
import {  Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";

export default function App() {
  const isLoggedIn = () => !!localStorage.getItem('accessToken')

  const location = useLocation()
  console.log(location);
  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
        {console.log('logged?', isLoggedIn())}
        <Routes>
          {isLoggedIn() ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/login" element={<Navigate to={'/'} />} />
              <Route path="/signup" element={<Navigate to={'/'} />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Navigate to={'/login'} />} />
              <Route path="/about" element={<Navigate to={'/login'} />} />
              <Route path="/contacts" element={<Navigate to={'/login'} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}
          <Route path="/authenticate" element={<Authenticate />} />
        </Routes>
      </main>
    </div>
  );
}

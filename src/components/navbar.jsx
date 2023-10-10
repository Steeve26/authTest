import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../services/auth0.services';

export default function navbar() {
  const navigate = useNavigate();
  const isLoggedIn = () => !!localStorage.getItem('accessToken')

  const returnUrl = import.meta.env.VITE_REACT_APP_AUTH0_LOGOUT_URI
  const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

  const handleClick = () => {
    if (isLoggedIn()) {
      auth.logout(
        {
          returnTo: returnUrl,
          clientID: clientId,
        }
      );
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userData');
    }
    else
    navigate("/login")

    const handleRedirection = (defaultRoute) => {
      isLoggedIn()
    }
  }
  return (
    <nav>
      <ul>
        <Link to={isLoggedIn() ? "/" : "/login"}>
          <li>home</li>
        </Link>
        <Link to={isLoggedIn() ? "/about" : "/login"}>
          <li>about</li>
        </Link>
        <Link to={isLoggedIn() ? "/contacts" : "/login"}>
          <li>contact us</li>
        </Link>
      </ul>
      <button onClick={handleClick}>{isLoggedIn() ? 'logout' : 'login'}</button>
    </nav>
  )
}

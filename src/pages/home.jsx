import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function home() {
  
  const navigate = useNavigate()
  const isLoggedIn = () => !!localStorage.getItem('accessToken')
  console.log('user log stat', isLoggedIn()); // true or false
  useEffect(() => {
    isLoggedIn() ? null : navigate('/login')
  })


  return (
    <div>Home sweet home</div>
  )
}
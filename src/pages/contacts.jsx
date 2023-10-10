import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function contacts() {
  const navigate = useNavigate()
  const isLoggedIn = () => !!localStorage.getItem('accessToken')

  useEffect(() => {
    isLoggedIn() ? null : navigate('/login')
  })

  return (
    <div>contact us</div>
  )
}

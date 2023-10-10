import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../services/auth0.services'

export default function authenticate() {
  const location = useLocation()
  const navigate = useNavigate()

  const processHash = hash => {
    auth.parseHash({
      hash
    }, function(error, result) {
      if (error) {
        console.log("something went wrong", error);
        return
      }
      if(result) {
        const {accessToken} = result
        if(accessToken) {
          auth.client.userInfo(accessToken, function(error, result) {
            if (error) {
              console.log("something went wrong fetching user data", error);
              return
            }
            console.log('user login successful', result);
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('userData', JSON.stringify(result));
            navigate('/')
          })
        }
      }
    })
  }
  useEffect(() => {
    if(location.hash) {
      processHash(location.hash)
    }
  }, [location])

  return (
    <div>...loading</div>
  )
}

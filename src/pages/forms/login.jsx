import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import {auth} from "../../services/auth0.services";
import styles from './formStyles.module.css'
import { Link } from 'react-router-dom';
import spinner from '../../assets/reactjs-loading-spinner-design-removebg-preview.png'
import svgSpinner from '../../assets/loading-spinner-svgrepo-com.svg'

export default function signup() {
  const authRealm = import.meta.env.VITE_REACT_APP_AUTH0_REALM;
  const redirectUri = import.meta.env.VITE_REACT_APP_LOGIN_REDIRECT_URI
  const response = import.meta.env.VITE_REACT_APP_AUTH0_LOGIN_RESPONSE_TYPE
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: values => {
      auth.login({
        username: values.email,
        password: values.password,
        realm: "Username-Password-Authentication",
        redirectUri: "https://authlogintest.netlify.app/authenticate",
        responseType: "token",
      }, 
      
      function (error, result) {
          if (error) {
            console.log("login unsuccessfull", error);
            return;
          }
          console.log("login unsuccessfull", result);
      });
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Inavlid email").required("Required"),
      password: Yup.string().required("Required")
    })
  });

  console.log(formik.values)

  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>login</h1>
      <div className={styles.fields}>            
        <label htmlFor="email">email*</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && <span className={styles.errMag}>{formik.errors.email}</span>}

        <label htmlFor="password">password*</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          id="password"
          name="password"
          type="password"
        />
        {formik.touched.password && <span className={styles.errMag}>{formik.errors.password}</span>}
      </div>

    <button className='login' type="submit" onClick={ () => setIsLoading(true) }>
      { isLoading? <img className='spinner' src={svgSpinner} width={30} alt="loading" /> : 'login' }
    </button>

    <span>Don't have an account? <strong>Signup <Link to="/signup">here</Link></strong></span>
    </form>
  )
}

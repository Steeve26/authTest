import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import {auth} from "../../services/auth0.services";
import styles from './formStyles.module.css'
import { Link } from 'react-router-dom';


export default function signup() {

  const authRealm = import.meta.env.VITE_REACT_APP_AUTH0_REALM;
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: values => {
      auth.signup(
        {
          email: values.email,
          password: values.password,
          connection: "Username-Password-Authentication",
        },
         function (error, result) {
          if (error) {
            console.log("registration unsuccessfull", error);
            return;
          }
           console.log("registration successfull", result);
        }
      );
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Inavlid email").required("Required"),
      password: Yup.string().required("Required")
    })
  });

  console.log(formik.values);
  return (
    <form onSubmit={formik.handleSubmit}>
    <h1>Signup</h1>
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
        {formik.touched.email && <span className={styles.errMsg}>{formik.errors.email}</span>}

        <label htmlFor="password">password*</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          id="password"
          name="password"
          type="password"
        />
        {formik.touched.password && <span className={styles.errMsg}>{formik.errors.password}</span>}
      </div>

    <button style={{ marginTop: "auto" }} type="submit">
      Register
    </button>

    <span>Already have an account? <strong>Login <Link to="/login">here</Link></strong></span>
    </form>
  )
}

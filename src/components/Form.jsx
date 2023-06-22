import React from "react";
import { Formik, Field,  useFormik, FormikProvider, ErrorMessage } from "formik";
import * as Yup from 'yup';


function Form(){

const Validation = Yup.object().shape({
    email:Yup.string().email().required('Pura Fill kro email'),
    password:Yup.string().required(),
})

const formik = useFormik({
    initialValues:{
        email:'',
        password:''
    },
    validationSchema:Validation,
    onSubmit: (values, {resetForm})=>{
        alert(values);
        console.log("Values", values)
    // confirmPassword:Yup.string().required()
        resetForm()
    }
});

const {errors, touched, handleSubmit, getFieldProps} = formik;
console.log("Fomik inital val", errors)
return (
    <>
    <p>Login Form</p>
    <FormikProvider value={formik}>
        <form onSubmit={handleSubmit}>
            <Field name="email" placeholder="Enter Email" />
            {errors.email && touched.email ? (<div>{errors.name}</div>) : null}
    {/* <input
    placeholder="Enter Name"
    type="email"
    {...getFieldProps('email')}
    /> */}
    <ErrorMessage name="email">
        {msg => <div style={{color:'red'}}>{msg}</div>}
    </ErrorMessage>
    <br/>
       <input
    placeholder="Enter Password"
    type="text"
    {...getFieldProps('password')}
    />
    <ErrorMessage name="password" className="red"></ErrorMessage>
    <br/>
    <button type="submit">Save Login</button>
    </form>
    </FormikProvider>
    </>
)
}

export default Form;
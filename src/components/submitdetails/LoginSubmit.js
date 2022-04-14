import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    
    const { name, value } = e.target;
    console.log(e.target)
    setValues({
      ...values,
      [name]: value
    });

  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    //localStorage.setItem("USER_DETAILS", JSON.stringify(values))
    let userData = JSON.parse(localStorage.getItem("USER_DETAILS"))
    if(values.email === userData.email && values.password === userData.password) {
        console.log("Sucesssssssss")
        return toast("Logged in successfully");
    } else {
        console.log("Invalid password or email")
        toast.error("Invalid password or email");

    }
    console.log("dddddd", userData);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;

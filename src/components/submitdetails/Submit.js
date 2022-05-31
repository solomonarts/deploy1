import React, { useState, useEffect } from 'react';
import axios from 'axios';



const useForm = (callback, validate) => {

  const rand = () => Math.random(0).toString(36).substr(2);
  const token = (length) => (rand() + rand() + rand() + rand()).substr(0, length);
  const [values, setValues] = useState({
    id: token(6),
    package:'',
    from: '',
    to: '',
    charges:'',
    description: '',
    reciepientContact: '',
    reciepientName: '',
    paymentmethod:'',
    status: '0'
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
    if(validate(values).length > 0){
      console.log(validate(values))
    } else {
      setIsSubmitting(true);
      localStorage.setItem("USER_DETAILS", JSON.stringify(values))
      console.log(values)

      axios
        ({
          method: 'post',
          url: "http://localhost:8080/API/orders.php",
          headers: { 'content-type': 'application/json' },
          data: values
        })
        .then(res => console.log("success", res))
        .catch(err => console.log("error", err))
    }
    
    
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

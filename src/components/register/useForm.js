import { useState, useEffect } from 'react';
import axios from "axios";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    company_name: '',
    physical_address: '',
    email: '',
    password: '',
    password2: '',
    telnumber: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });

  };
  const rand = () => Math.random(0).toString(36).substr(2);
  const token = (length) => (rand() + rand() + rand() + rand()).substr(0, length);

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    if (validate(values).length > 0) {
      console.log(validate(values))
    } else {
      setIsSubmitting(true);
      localStorage.setItem("USER_DETAILS", JSON.stringify(values))
      localStorage.setItem("USER_TOKEN", JSON.stringify(token(40)))
      console.log(token(40));
      console.log(values)
      
      axios
        ({
          method: 'post',
          url: "http://localhost:8080/API/data.php",
          headers: { 'content-type': 'application/json' },
          data: values
        })
        .then(res => console.log("success", res.data))
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

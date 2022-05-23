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

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    localStorage.setItem("USER_DETAILS", JSON.stringify(values))
    // console.log(values)
    axios
      ({
        method: 'post',
        url: "http://localhost:8080/API/data.php",
        headers: { 'content-type': 'application/json' },
        data: values
      })
      .then(res => console.log("success", res.data))
      .catch(err => console.log("error", err))

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

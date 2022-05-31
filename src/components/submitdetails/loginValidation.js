export default function validateLogin(values) {
    let errors = {};
  
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.to) {
      errors.to = 'Destination Required';
    } else if (values.to.length < 6) {
      errors.to = 'Location requres more detail';
    }

    if (!values.package) {
      errors.package = 'Package Type Required';
    }
    
    if (!values.charges) {
      errors.charges = 'Mode of transport Required';
    }
    if (!values.paymentmethod) {
      errors.paymentmethod = 'Payment Method Required';
    }
  
    if (!values.from) {
      errors.from = 'Please enter pickup location';
    } else if (values.from.length < 5) {
      errors.from = 'Too short';
    }
    if (!values.reciepientName) {
      errors.reciepientName = 'Reciepient Name is required';
    } else if (values.reciepientName.length < 5) {
      errors.reciepientName = 'Too short';
    }
    if (!values.reciepientContact) {
      errors.reciepientContact = 'Reciepient Contact is requried';
    } else if (values.reciepientContact.length < 5) {
      errors.reciepientContact = 'Too short';
    }
    return errors;
  }
  
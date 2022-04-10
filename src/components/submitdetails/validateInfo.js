export default function validateInfo(values) {
  let errors = {};

  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.to) {
    errors.to = 'Destination Required';
  } else if (values.to.length < 6) {
    errors.to = 'Location requres more detail';
  }

  if (!values.from) {
    errors.from = 'Please enter pickup location';
  } else if (values.from.length < 5) {
    errors.from = 'Too short';
  }
  if (!values.receipientName) {
    errors.reciepientName = 'Password is required';
  } else if (values.reciepientName.length < 5) {
    errors.reciepientName = 'Too short';
  }
  if (!values.reciepientContact) {
    errors.reciepientContact = 'Password is required';
  } else if (values.reciepientContact.length < 5) {
    errors.reciepientContact = 'Too short';
  }
  return errors;
}

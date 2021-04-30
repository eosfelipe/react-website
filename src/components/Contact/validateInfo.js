export default function validateInfo(values) {
  let errors = {}

  if (!values.name) {
    errors.name = 'Name is required'
  }
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
      values.email
    )
  ) {
    errors.email = 'Email address is invalid'
  }

  if (!values.subject) {
    errors.subject = 'Subject is required'
  }

  if (!values.message) {
    errors.message = 'Message is required 💡'
  }

  return errors
}

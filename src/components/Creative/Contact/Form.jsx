import { useState } from 'react';
// import {contactus} from '../../../../public/contact.php'

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errMessage, setErrMessage] = useState(null);

  const validateForm = (formValues) => {
    if (!formValues.name || !formValues.email || !formValues.message) {
      setErrMessage('Please fill in all fields*');
      return false;
    }
    if (formValues.name.length < 5) {
      setErrMessage('Name must be at least 5 characters');
      return false;
    }
    if (formValues.subject.length < 10) {
      setErrMessage('Subject must be at least 10 characters');
      return false;
    }
    if (formValues.message.length < 10) {
      setErrMessage('Message must be at least 10 characters');
      return false;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
      setErrMessage('Email is invalid');
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate Form
    if (!validateForm(formData)) return;
  
    // Clear Error Message
    setErrMessage('');
  
    // Submit The Form
    fetch('contact.php', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // Add any additional headers if required
      },
      // body: JSON.stringify(formData),
    })
      .then(response => {
        // Handle the response from the server
        // For example, you can display a success message or handle any errors
      })
      .catch(error => {
        // Handle any network errors or exceptions
      });
  };
  
  

    const handleChange = (e) => {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   //= Validate Form
  //   if (!validateForm(formData)) return;

  //   //= Clear Error Message
  //   setErrMessage('');
  //   //= Sumbit The Form
  //   document.forms[0].submit();
  // };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="box-shadow to-up">
            <form id="contact-form">
              {
                errMessage && <div className="messages" style={{color:'red'}}>{errMessage}</div>
              }

              <div className="controls row">

                <div className="col-12">
                  <div className="mb-40">
                    <h5 className="fw-600">Get in touch and we’ll get back to you as soon as we can. <br /> We look forward to hearing from you!</h5>
                  </div>
                </div>

                <div className="col-lg-6 md-mb30">
                  <div className="form-group mb-30">
                    <input id="form_name" type="text" name="name" placeholder="Name*" required="required" onChange={handleChange} value={formData.name} />
                  </div>

                  <div className="form-group mb-30">
                    <input id="form_email" type="email" name="email" placeholder="Email*" required="required" onChange={handleChange} value={formData.email} />
                  </div>

                  <div className="form-group">
                    <input id="form_subject" type="text" name="subject" placeholder="Subject*" required="required" onChange={handleChange} value={formData.subject} />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group sam-height">
                    <textarea id="form_message" name="message" placeholder="Message*" rows="4" required="required" onChange={handleChange} value={formData.message}></textarea>
                  </div>
                </div>

                <div className="col-12">
                  <div className="text-center mt-40">
                    <button type="submit" onClick={handleSubmit}>
                      <span>Let&lsquo;s Talk</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import '../styles.css';

function Contact() {
  const form = useRef();
  const [inputValue, setInputValue] = useState({
    user_first_name: '',
    user_last_name: '',
    user_email: '',
    user_phone: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !inputValue.user_first_name ||
      !inputValue.user_last_name ||
      !inputValue.user_email ||
      !inputValue.user_phone ||
      inputValue.user_phone.length !== 10
    ) {
      window.alert('Please fill in all required fields and provide a 10 digit phone number.');
      return;
    }

    emailjs.sendForm(
      process.env.REACT_APP_MAILJS_SERVICE_ID, 
      process.env.REACT_APP_MAILJS_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_MAILJS_PUBLIC_KEY
      )
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          setInputValue({
            user_first_name: '',
            user_last_name: '',
            user_email: '',
            user_phone: ''
          })
          window.alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
      });
  };

  function handleChange(event) {
    const {name, value} = event.target;
    setInputValue({...inputValue, [name]: value});
  }

  return (
    <div className='get-started-contact-div'>
      <form ref={form} onSubmit={sendEmail}>
        <label className='get-started-required-field'>First Name</label>
        <input 
          type="text" 
          name="user_first_name"
          value={inputValue.user_first_name}
          onChange={handleChange}
        />
        <label className='get-started-required-field'>Last Name</label>
        <input 
          type="text" 
          name="user_last_name"
          value={inputValue.user_last_name}
          onChange={handleChange}
        />
        <label className='get-started-required-field'>Email</label>
        <input 
          type="email" 
          name="user_email"
          value={inputValue.user_email}
          onChange={handleChange}
        />
        <label className='get-started-required-field'>Phone</label>
        <input 
          type="tel" 
          name="user_phone"
          placeholder='E.g. xxxxxxxxxx'
          value={inputValue.user_phone}
          onChange={handleChange}
        />
        <label>Message</label>
        <textarea 
          name="message"
        />
        <input 
          className='get-started-submit' 
          type="submit" 
          value="Send Message" 
        />
      </form>
    </div>
  )
}

export default Contact;

import React, { useState } from 'react';
import './Contact.css'
function Contact()
 {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
  }
  return (
    <div className='contact__container'>
      <h3 className='contact__title'>This is Contact Page</h3>
      <p className='contact__first_paragraph'>
        <b>Hello World.</b> Welcome to The REAL WORLD Game. if you  want to Walk up 
        to <br/>  The Reality you have to me Contact me Right now. by girumbasha0@gmail.com
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className='contact__submit_btn'>Submit</button>
      </form>
      <p className='contact__first_paragraph'>
        <b>Hello World.</b> Welcome to The REAL WORLD Game. if you  want to Walk up 
        to <br/>  The Reality you have to me Contact me Right now. by girumbasha0@gmail.com
      </p>
      <p className='contact__first_paragraph'>
        <b>Hello World.</b> Welcome to The REAL WORLD Game. if you  want to Walk up 
        to <br/>  The Reality you have to me Contact me Right now. by girumbasha0@gmail.com
      </p>
      <p className='contact__first_paragraph'>
        <b>Hello World.</b> Welcome to The REAL WORLD Game. if you  want to Walk up 
        to <br/>  The Reality you have to me Contact me Right now. by girumbasha0@gmail.com
      </p>

      <p className='contact__first_paragraph'>
        <b>Hello World.</b> Welcome to The REAL WORLD Game. if you  want to Walk up 
        to <br/>  The Reality you have to me Contact me Right now. by girumbasha0@gmail.com
      </p>

      <p className='contact__first_paragraph'>
        <b>Hello World.</b> Welcome to The REAL WORLD Game. if you  want to Walk up 
        to <br/>  The Reality you have to me Contact me Right now. by girumbasha0@gmail.com
      </p>
      <p className='contact__first_paragraph'>
        <b>Hello World.</b> Welcome to The REAL WORLD Game. if you  want to Walk up 
        to <br/>  The Reality you have to me Contact me Right now. by girumbasha0@gmail.com
      </p>
      <p className='contact__first_paragraph'>
        <b>Hello World.</b> Welcome to The REAL WORLD Game. if you  want to Walk up 
        to <br/>  The Reality you have to me Contact me Right now. by girumbasha0@gmail.com
      </p>
       
    </div>
  )
}

export default Contact

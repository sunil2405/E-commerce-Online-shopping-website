import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
    const [users, setUsers] = useState(
        {
            Name: '', Email: '', Subject: '', Message: ''
        }
    )
    let name, value
    const data = (e) =>
    {
        name = e.target.name;
        value = e.target.value;
        setUsers({...users, [name]: value})
    }
  return (
    <>
    <div className='contact_container'>
        <div className='contant'>
            <h2># contact us</h2>
            <div className='form'>
                <form method='POST'>
                    <input type='text' name='Name' value={users.Name} placeholder='Enter Your Full Name' required autoComplete='off' onChange={data}/>
                    <input type='email' name='Email' value={users.Email} placeholder='Enter Your E-mail' required autoComplete='off' onChange={data}/>
                    <input type='text' name='Subject' value={users.Subject} placeholder='Enter Your Subject' required autoComplete='off' onChange={data}/>
                    <textarea name='Message' value={users.Message} placeholder='Your Message' required autoComplete='off' onChange={data}/>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact

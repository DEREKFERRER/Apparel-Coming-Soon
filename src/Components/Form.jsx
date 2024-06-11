import { useState } from 'react';
import arrow from '../images/icon-arrow.svg';
import errorIcon from '../images/icon-error.svg';
import './form.scss'



const Form = () =>  {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false)


  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
  const newError = "Please provide an email"
   if (!email) {
    setError(newError)
   } else if (!/\S+@\S+\.\S+/.test(email)) {
    setError(newError)
   } else {
    alert("Thank you for Subscribing!! " + email)
    setError(false)
   }

  }


  
    return (
        <>
            <form onSubmit={handleSubmit} >
                  <div className='wrapper'>
                    <input
                     type='text' 
                     name='email'
                     value={email}
                     placeholder='Email Address' 
                     onChange={handleChange}
                     />
                     {error && (
                      <>
                      <div className='error_email'>
                        <p style={{ color: "red" }}>{error}</p>
                        <img src={errorIcon}/>
                      </div>
                         
                      </>
                     )}
                      <button  className='arrow-btn' type='submit'>
                        <img src={arrow}/>
                      </button>
                  </div>
                  
            </form>
          
        </>
    )
}
export default Form
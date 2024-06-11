import './app.scss'
import logo from './images/logo.svg';
import heroDesktop from './images/hero-desktop.jpg'
import heroMobile from './images/hero-mobile.jpg'
import Form from './Components/Form';


function App() {

  return (
    <>
      <div className='container'>
        <div className='coming-soon'> 
         <div className='logo'>
          <img src={logo}/>
        </div>
          <div>
             <img className='hero-mobile' src={heroMobile}/>
          </div>
            <div className="coming-soon-content">
              <h1> 
                <span>We're </span> 
                  Coming Soon
                </h1>
                <p>
                  Hello fellow shoppers! We're currently building our new fashion store. 
                  Add your email below to stay up-to-date with announcements and our launch deals.
                </p>
            <Form/>
            </div>
        </div>
        <div>
          <img className='hero-desktop' src={heroDesktop}/>
        </div>
      </div>
    
      
    </>
  )
}

export default App

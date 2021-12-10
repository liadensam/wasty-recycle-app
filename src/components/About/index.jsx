import React, {useRef, useEffect, useState} from 'react';
import './_about.scss'
import '../../_variables.scss'
import Menu from '../../components/Menu';
import logo from './img/Logo.gif'

const About = () => {

    const subjectRef = useRef(null)
    const emailRef = useRef(null)
    const textRef = useRef(null)

    //a function that handles the submission of the form
    //contains the retrieved data and stores it in an object
    const handleSubmit = (event) => {
        //prevents the page from reloading
        event.preventDefault()
    }

    //to change the button text when clicked, through State
    const text = "Send" 
    const [buttonText, setButtonText] = useState(text);

    useEffect(()=> {
        const timer = setTimeout(()=> {
           setButtonText(text);
        }, 5000);
        return () => clearTimeout(timer);
     }, [buttonText])

    return(
      <>
      <Menu />
      <img className="logo" src={logo} alt=""/>
       <div className="container">
           <div className="about-container">
           <h1 className="about-container--title">About</h1>
           <p className="about-container--text">Dilka app is here to make the recycling process easier for people. It contains all the information you need about recycling and locations of the recycling stations in Reykjavik.</p>
           </div>
           <div className="contactform--container">
                <h1 className="contactform--title">Contact us</h1>
                <form 
                onSubmit={handleSubmit} 
                className="form">
                        <div className="subject">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                id="email"
                                className="email"
                                ref={emailRef} 
                                tabIndex="3"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                className="subject"
                                ref={subjectRef} 
                                tabIndex="1"
                            />
                      
                            <textarea
                                placeholder="Text"
                                className="text"
                                ref={textRef} 
                                name="text"
                            />
                            <button 
                            type="submit" 
                            className="send" 
                            onClick={() => setButtonText("♥")}>{buttonText}</button>

                        </div>
                </form>
            </div>
       </div>
      </>
  )
 }

export default About;
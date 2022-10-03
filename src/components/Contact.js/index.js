import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import './ContactElements.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import linkedIn from '../../images/linkedInBlackWhite.webp';
import github from '../../images/gitWhite.png';
import bildeAvMeg from '../../images/bildeAvMeg.png';
const Contact = () => {

    const form = useRef();
    let notify = () => toast.success("Message sent successfully!");
      
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_5uiu81a', 'template_1nvg2xh', form.current, 'w8JJUWEYBhio3UPw_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
      
    
      return (
        <div className='contactContainer' id='contact'>
            <div className='bildeContainer'>
                <img src={bildeAvMeg} className="bildeAvMeg" />
            </div>
            <div className='meldingContainer'>
            <div className='inputContainer'>
                <p className='toplineV2'>Get in Touch</p>
                <h2 className='heading V8'>Contact Me</h2>
            </div>
            <form className='inputContainer' ref={form} onSubmit={sendEmail}>
            <div className='innholdOverdel'>
                <p className='overLinjaTekst'>Have any questions?</p>
                <p className='overLinjaTekst V2'>Shoot me an email.</p>
                <div className='rettStrek' />
            </div>
                <label className='overtekst'>Your Name</label>
                <input className='textField' type="text" placeholder='Full Name' name="user_name" required/>
                <label className='overtekst'>Your Email</label>
                <input className='textField' type="email" placeholder='Email' name="user_email" required/>
                <label className='overtekst'>Write A Message</label>
                <textarea className='meldingSection' cols={50} rows={10} placeholder="Message" name="message"/>
                <input className='button typ2' type="submit" value="Send" onClick={notify} />
                <ToastContainer />
            </form>
            <div className='straightLine'/> 
            </div>
    


          
        </div>
      )
    

    


}

export default Contact

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact_testElements.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import linkedIn from '../../images/linkedInBlackWhite.webp';
import github from '../../images/gitWhite.png';
import bildeAvMeg from '../../images/bildeAvMeg.png';

function Contact_test() {

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
        <div className='Contact_Container' id='contact'>
            <div className='rowbox_container' >
                <div className='columnBox_contact left_side'>
                    <div className='bildeContainer_contact'>
                        <img src={bildeAvMeg} className="bildeAvMeg_contact" />
                    </div>
                </div>
                <div className='columnBox_contact right_side'>
                    <div className='meldingContainer_contact'>
                        <div className='headline_Contact'>
                            <p className='topline_contact'>Get in Touch</p>
                            <h2 className='heading_contact'>Contact Me</h2>
                        </div>
                        <div className='innholdOverdel_contact'>
                            <p className='Contact_headline1'>Have any questions?</p>
                            <p className='Contact_headline2'>Shoot me an email.</p>
                            <div className='rettStrek_contact' />
                        </div>
                        <form className='inputContainer_contact' ref={form} onSubmit={sendEmail}>
                            <label className='overtekst_contact'>Your Full Name</label>
                            <input className='textField_contact' type="text" placeholder='Full Name' name="user_name" required />
                            <label className='overtekst_contact'>Your Email</label>
                            <input className='textField_contact' type="email" placeholder='Email' name="user_email" required />
                            <label className='overtekst_contact'>Write A Message</label>
                            <textarea className='meldingSection_contact' cols={50} rows={10} placeholder="Message" name="message" />
                            <div className='button_contact'>
                                <input className='button typ2' type="submit" value="Send" onClick={notify} />
                            </div>
                            <ToastContainer />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact_test

import "../styles/Contact.css"
import phone from "../images/phone.png"
import email from "../images/email.png"
import adress from "../images/home.png"
import { useRef, useState } from "react"
import emailjs from 'emailjs-com';

const Contact = () => {

     const formRef = useRef()
     const [done, setDone] = useState(false)

     const handleSubmit = (e) =>{
         e.preventDefault();
         console.log('ok')
         emailjs.sendForm('service_combw1p', 'template_rd4voal', formRef.current, 'user_MjqAfO9wAAoKJ0rkcsNKS')
         .then((result) => {
             console.log(result.text);
             setDone(true)
         }, (error) => {
             console.log(error.text );
         });

     }
    return ( <div className="contact">
        <div className="contact-bgc"></div>
        <div className="contact-bg"></div>
        <div className="contact-wrapper">
            <div className="contact-left">
                <h1 className="contact-title">Skontaktuj się</h1>
                <div className="contact-info">
                    <div className="contact-info-item">
                            <img src={phone} alt="phone icon" className="contact-icon"/>
                            +48 537 260 196
                    </div>
                    <div className="contact-info-item">
                            <img src={email} alt="email icon" className="contact-icon"/>
                            kamdobosz26@wp.pl
                    </div>
                    <div className="contact-info-item">
                            <img src={adress} alt="adress icon" className="contact-icon"/>
                            Warszawa/Zielonka
                    </div>

                </div>
            </div>
            <div className="contact-right">
                <p className="contact-description"><b>Zapraszam do kontaktu.</b> Chętnie rozpatrzę każdą ofertę pracy, praktyk czy stażu.</p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' name="user_name"/>
                    <input type="text" placeholder='Subject' name="user_subject"/>
                    <input type="text" placeholder='Email' name="user_email"/>
                    <textarea rows= '6' placeholder="Message" name="message"/>
                    <button>Wyślij</button>
                    {done && "Dziękuję za wiadomość."}
                </form>
            </div>
        </div>
    </div> );
}
 
export default Contact;
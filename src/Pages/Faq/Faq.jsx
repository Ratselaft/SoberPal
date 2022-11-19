import React from 'react'
import './Faq.css'
import FaqData from "../../Data/FaqData";
import helpcenter from "../../assets/helpcenter.png";
import Button from "../../UI/Button";
import Button2 from "../../UI/Button2";


const Faq = () => {
  return (
    <div className="faq__container">
      <div className="faq__help-center">
        <div className="faq__help-center__text">
          <h1>Help centre</h1>
          <p className='faq__p'>Support that is always online.Get all the help you need about the product here.</p>
        </div>
        <div className="faq__help-center__img">
          <img src={helpcenter} alt="" />
        </div>
      </div>

      <div className="faq__form-question first__form">
        <h4 className='faq__form__title'>Have a question?</h4>
        <form action="">
          <input type="email" name="" id="" placeholder='Enter your email adress'/>
          {/* <button type="submit">Send</button> */}
          <Button2 text={FaqData.send} />
        </form>
      </div>

      <hr className='hr'/>

      <div className="faq__section2">
        <h2>FAQs</h2>
        <p className='faq__p'>Everything you need to go through the journey of reducing your alcohol intake.  These are frequently asked questions bout the product. Dont find answer to your question?? send us amessage..</p>
        <div className="faq__questions-answer-section">
          <p>What is Soberpal?<span>+</span></p>
          <hr className='faq__border-bottom'/>

          <p>Can i be annoymous?<span>+</span></p>
          <hr className='faq__border-bottom'/>

          <p>Do i get a personal sponser?<span>+</span></p>
          <hr className='faq__border-bottom'/>

          <p>How does billing work<span>+</span></p>
          <hr className='faq__border-bottom'/>

          <p>How do I change my account email<span>+</span></p>
        </div>
      </div>

      <div className="faq__form-question">
        <h4 className='faq__form__title'>Have a question?</h4>
        <form action="">
          <input type="email" name="" id="" placeholder='Enter your email adress'/>
          {/* <button type="submit">Send</button> */}
          <Button2 text={FaqData.send} id='btn'/>
        </form>
      </div>

      <div className="faq__download-app">
        <div className="faq__download-app-text">
          <h3>Download the Soberpal app</h3>
          <p className='faq__p download__p'>Join over 200+ people already growing with Soberpal.</p>
        </div>
        <div className="faq__download-app-btn">
        <Button text={FaqData.download} id='btn'/>
        </div>
      </div>
    </div>
  )
}

export default Faq
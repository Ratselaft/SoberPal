import "./contact.scss";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <section>
      <header>
        <h1>Contact Us</h1>
        <p>You can always reach out to us. We wil be glad to hear from you</p>
      </header>
      <div className="contact__content-section">
        <div className="section__one">
          <h2>Get in touch with us. How can we help?</h2>
          <form>
            <div className="input__container">
              <label>Name</label>
              <input
                type=""
                name=""
                value=""
                placeholder="Omowunmi Olawehinmi"
              />
            </div>
            <div className="input__container">
              <label>Email</label>
              <input
                type=""
                name=""
                value=""
                placeholder="omowunmi2022@gmail.com"
              />
            </div>
            <div className="input__container">
              <label>Message</label>
              <textarea
                cols=""
                rows="10"
                placeholder="Enter your message here..."
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="section__two">
          <div className="address__section">
            <div className="address">
              <GrLocation />
              <p>256, Newyork City, United States</p>
            </div>
            <div className="contact">
              <BsTelephone />
              <p>01 3456789</p>
            </div>
          </div>
          <div className="socials">
            <h3>Follow Us</h3>
            <div className="icons">
              <div className="icon__container">
                <BsInstagram className="icon" />
              </div>
              <div className="icon__container">
                <BsInstagram className="icon" />
              </div>
              <div className="icon__container">
                <BsInstagram className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
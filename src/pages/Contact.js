import { useContext } from "react";
import { Context } from "../Context";

// Styles
import "./Contact.css";

export default function Contact() {
  const [user, setUser] = useContext(Context);
  return (
    <>
      {!user ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="contact-page-description">Get in touch!</div>
          <div className="contact-wrapper">
            <div className="contact-boxes">
              <div className="contact-info">
                <p className="contact-info-header">Contact Info</p>

                <p>
                  Name: {user.name.first} {user.name.last}
                </p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Cell: {user.cell}</p>
              </div>
              <form className="contact-form">
                <p className="contact-form-header">Contact Me</p>
                <div className="contact-form-input-wrapper">
                  <div className="contact-form-half-wrapper">
                    <div className="contact-form-half">
                      <input
                        className="contact-form-input contact-form-name"
                        placeholder="Name"
                      ></input>
                    </div>
                    <div className="contact-form-half left">
                      <input
                        className="contact-form-input contact-form-email"
                        placeholder="Email"
                      ></input>
                    </div>
                  </div>
                  <input
                    className="contact-form-input contact-form-subject"
                    placeholder="Subject"
                  ></input>
                  <textarea
                    className="contact-form-input contact-form-message"
                    placeholder="Message"
                  ></textarea>
                  <button
                    className="contact-form-button contact-form-submit"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

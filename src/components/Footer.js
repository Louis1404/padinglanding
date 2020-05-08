import React from "react";
import "./_Footer.scss";
import Faq from "./Faq";
import Popup from "reactjs-popup";
import MailchimpSubscribe from "react-mailchimp-subscribe"

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <div >
  
      <input
      
      ref={node => (email = node)}
      type="email"
      placeholder="Your email"
      />
      
      <Popup
        modal
        trigger={
          <button  className="btn-blue" onClick={submit}>
      Try this app
      </button>
        }
        >
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </Popup>
      
    </div>
  );
};

export default class Footer extends React.Component {
  render() {
    const url =
      "https://pading.us8.list-manage.com/subscribe/post?u=f662f9f87cc780ecd97294f34&amp;id=0ef42685e7";
    return (
      <div className="wrapper">
        <div className="footer">
          <div className="footer-menu">
            <div className="footer-menu-email">
              <h4>Trying this app</h4>
              <p>
                Explore the next destination to meet with your friends and
                family
              </p>
              <div className="footer-menu-email-form">
              <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
              )}
            />
              </div>
            </div>
            <div className="footer-menu-app-contact">
              <div className="footer-menu-app">
                <h4>Pading</h4>
                <a href="/" onClick={this.props.scrollUp}>
                  <p>Product</p>
                </a>
                <Popup
                  modal
                  trigger={
                    <a href="http://pading.eu">
                      <p>FAQ</p>
                    </a>
                  }
                >
                  <Faq />
                </Popup>
              </div>
              <div className="footer-menu-contact">
                <h4>Contact</h4>
                <a href="mailto:louisburette@pading.eu">
                  <p>Contact us</p>
                </a>
                <div className="footer-social">
                  <a
                    href="https://www.facebook.com/Pading-103563007939325/?view_public_for=103563007939325"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/padingapp/?hl=fr"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/padingapp/about/?viewAsMember=true"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

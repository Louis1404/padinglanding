import React from "react";
import "./_Footer.scss";
import Faq from "./Faq";
import Popup from "reactjs-popup";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { withSwalInstance } from "sweetalert2-react";
import swal from "sweetalert2";

const CustomForm = ({ status, message, onValidated }) => {
  let email;

  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div>
      {status === "error" && (
        <SweetAlert>
          {swal.fire({
            icon: 'info',
            title: 'You are already part of our community :)',
            confirmButtonText: 'good to know',
            confirmButtonColor: '#29b3c1',
            allowEnterKey: 'true',
            allowOutsideClick: 'true',
            buttonsStyling: 'false',
            footer: '<p>but you can still follow us on social media!</p>',
            customClass:{
              cancelButton: 'cancel-button-class'
            }
          })}
        </SweetAlert>
      )}
      {status === "success" && (
        <SweetAlert>
          {swal.fire({
            icon: 'success',
            title: 'Thank you for believing in us! You are now registered',
            confirmButtonText: 'Thanks',
            confirmButtonColor: '#29b3c1',
            allowEnterKey: 'true',
            allowOutsideClick: 'true',
            buttonsStyling: 'false',
            footer: '<p>You can also follow us on social media!</p>',
            customClass:{
              cancelButton: 'cancel-button-class'
            }
          })}
        </SweetAlert>
      )}
      
      <input
        ref={(node) => (email = node)}
        type="email"
        placeholder="Your email"
      />

      <button
        className="btn-blue"
        onClick={submit}
        disabled={status === "sending"}
      >
        Try this app
      </button>
    </div>
  );
};

const SweetAlert = withSwalInstance(swal);

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
                    <a>
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

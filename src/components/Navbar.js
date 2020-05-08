import React from "react";
import "./_NavBar.scss";
import logo from "../img/pading.png";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { withSwalInstance } from "sweetalert2-react";
import swal from "sweetalert2";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  let popUp = false;
  
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

    const showPopUp = () => {
      return !popUp
    }
    

  return (
    <div>
      {status === "error" && (
        <SweetAlert
        show={showPopUp}
        title="Newsletter"
        text="You are already part of our community"
        onConfirm={showPopUp}
    />
      )}
      {status === "success" && (
        <SweetAlert
          show={showPopUp}
          title="Newsletter"
          text={message}
          onConfirm={showPopUp}
      />
      )}

      <input
        ref={(node) => (email = node)}
        type="email"
        placeholder="Your email"
      />

      <button className="btn-blue" onClick={submit} disabled={status === "sending"}>
        Try this app
      </button>
    </div>
  );
};

const SweetAlert = withSwalInstance(swal);

export default class NavBar extends React.Component {
  state = {
    email: "",
    show: false
  };

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  resetForm() {
    this.setState({ email: "" });
  }

  render() {
    const url =
      "https://pading.us8.list-manage.com/subscribe/post?u=f662f9f87cc780ecd97294f34&amp;id=0ef42685e7";
    return (
      <div className="navbar">
        <div>
          <button onClick={() => this.setState({ show: true })}>Alert</button>
          <SweetAlert
            show={this.state.show}
            title="Demo"
            text="SweetAlert in React"
            onConfirm={() => this.setState({ show: false })}
          />
        </div>
        <div className="navbar-brand">
          <a href="/">
            <img src={logo} alt="Pading find the perfect place to meet" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-social">
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

          <div className="email-form email-form-background">
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

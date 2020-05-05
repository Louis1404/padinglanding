import React from "react";
import axios from "axios";
import "./_NavBar.scss";
import logo from "../img/pading.png";

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
    
      <br />
      <input
      
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button  className="btn-blue" onClick={submit}>
      Try this app
      </button>
    </div>





  );
};
export default class NavBar extends React.Component {
  state = {
    email: ""
  };

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  
    
  }

  resetForm() {
    this.setState({ email: "" });
  }


  render() {

    












    const url =
      "https://pading.us8.list-manage.com/subscribe/post?u=f59b04ecc60bde092c29981a1&amp;id=9090d92670";
    return (

      <div className="navbar">
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
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
            
          </div>
        </div>
      </div>













    )
  }
}

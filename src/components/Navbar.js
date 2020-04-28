import React from "react";
import axios from "axios";
import "./_NavBar.scss";
import logo from "../img/pading.png";

export default class NavBar extends React.Component {
  state = {
    email: "",
  };

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    axios({
      method: "POST",
      url: "http://localhost:3000",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message sent");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send");
      }
    });
  }

  resetForm() {
    this.setState({ email: "" });
  }

  render() {
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
            <form
              target="_blank"
              method="POST"
              onSubmit={this.handleSubmit.bind(this)}
            >
              <input
                name="EMAIL"
                placeholder="Email address"
                type="email"
                value={this.state.name}
                onChange={this.onEmailChange.bind(this)}
              />
              <button className="btn-blue" type="submit">
                Try this app
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

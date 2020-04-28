import React from "react";
import "./_Footer.scss";
import Faq from "./Faq";
import Popup from "reactjs-popup";

export default class Footer extends React.Component {
  render() {
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
                <form
                  target="_blank"
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                >
                  <input
                    name="EMAIL"
                    placeholder="Email address"
                    required=""
                    type="email"
                  />
                  <button className="btn-blue">Try this app</button>
                </form>
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
                    <a ref="/">
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
                    target="blank"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="http://google.fr">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="http://google.fr">
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

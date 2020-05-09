import React from 'react';
import './_Banner.scss';
import catsandplants from '../img/catsandplants.mp4';
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

export default class Banner extends React.Component {
    render() {
        const url =
        "https://pading.us8.list-manage.com/subscribe/post?u=f662f9f87cc780ecd97294f34&amp;id=0ef42685e7";
        return (
            <div className="banner">
                <div className="valueprop">  
                    <div className="valueprop-title">
                        <h1>Find the perfect place to meet</h1>
                    </div>
                    <div className="valueprop-details">
                        <p>Select your dates and departure cities you each come from. Explore all the destinations at the lowest price for you and the people you plan to meet</p>
                    </div>

                    

                    <div className="email-form-banner">
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
                <div className="gif">
            
                    <video className="banner-img" autoPlay="autoplay" loop>
                        <source src={catsandplants} />
                    </video>           
                </div>
            </div>
        )
    }
}
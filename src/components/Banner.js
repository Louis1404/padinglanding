import React from 'react';
import './_Banner.scss';
import catsandplants from '../img/catsandplants.mp4';


export default function Banner() {
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
                    <form
                        target="_blank"
                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                        method="get"
                    >
                        <input name="EMAIL" placeholder="Email address" required="" type="email" />
                        <button className="btn-blue">Try this app</button>
                    </form>
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
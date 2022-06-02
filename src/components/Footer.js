import React from 'react';
import emailjs from 'emailjs-com';
function Footer() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_3cgd93a', 'template_dapptnn', e.target, 'user_85McB6BS84C9WdDmfL0pV')
          .then((result) => {
              console.log(result.text + 'mail send');
              alert("Your subscription has been sent");
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    return (
        <div>
            <footer>
                <section className="ftr-1">
                    <div className="container">
                        <div id="subscribe-newsletter" className="row ff1">
                            <div className="footer-1 col-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="footet-heading">
                                    <h2>Stay in the know with our newsletter</h2>
                                </div>
                            </div>
                            <div className="footer-2 col-12 col-sm-12 col-md-6 col-lg-8 align-self-end">
                                <div className="footet-heading">
                                    <form id="footer-form" onSubmit={sendEmail}>
                                        <input type="text" className="footer-email" placeholder="Your Email here" name="email" required/><span className="email-tip"></span>
                                        <button className="footer-btn">Subscribe Now <i className="fa fa-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>   
                    </div>
                </section>
                <section className="ftr-1-email">
                    <div className="container">
                        <div className="row ff1">
                            <div className="footer-1 col-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="footet-heading">
                                    <h2>Stay in the know with our newsletter</h2>
                                </div>
                            </div>
                            <div className="footer-2 col-12 col-sm-12 col-md-6 col-lg-8 align-self-end">
                                <div className="footet-heading">
                                    <input type="text" className="footer-email" placeholder="Your Email here" name="email" />
                                </div>
                            </div>
                        </div>   
                    </div>
                </section>
                <section className="ftr-1-btn">
                    <div className="container">
                        <div className="row ff1">
                            <div className="footer-2 col-12 col-sm-12 col-md-6 col-lg-8 align-self-end">
                                <div className="footet-heading">
                                    <button className="footer-btn">Subscribe Now <i className="fa fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>   
                    </div>
                </section>
                <section className="ftr-2"> 
                    <div className="container">
                        <div className="row ff2">
                            <div className="footer-3 col-12 col-sm-12 col-md-12 col-lg-2">
                                <a href="/"><img src="/assets/img/scriptics_wht_bg.svg" alt="scriptics logo"/></a>
                            </div>
                            <div className="footer-4 col-12 col-sm-12 col-md-12 col-lg-10 text-right">
                                <ul className="footer-ul">
                                    {/*<li><a href="/">Insights</a></li>*/}
                                    <li><a href="/#he_services">Services</a></li>
                                    <li><a href="/#he_industries">Industries</a></li>
                                    <li><a href="/about-us">About Scriptics</a></li>
                                    <li><a href="/#he_cloud">Cloud Service</a></li>
                                    {/*<li><a href="/">Career</a></li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="footer-5 col-12 col-sm-12 col-md-6 col-lg-6">
                                <p>© 2010-2022 Scriptics. All Rights Reserved.</p>
                            </div>
                            <div className="footer-6 col-12 col-sm-12 col-md-6 col-lg-6 text-right">
                                <ul className="social-icon">
                                    <li className="social-twitter">
                                        <a href="https://twitter.com/scripticstech/"><i className="fa fa-twitter-square fa-2x"></i></a>
                                    </li>
                                    <li className="social-facebook">
                                        <a href="https://www.facebook.com/scripticsinc"><i className="fa fa-facebook-square fa-2x"></i></a>
                                    </li>
                                    <li className="social-linkedin">
                                        <a href="https://in.linkedin.com/company/scripticstechs"><i className="fa fa-linkedin-square fa-2x"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}
export default Footer

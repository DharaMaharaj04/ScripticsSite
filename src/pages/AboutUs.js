import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// const opt = {
//     margin: 10,
//     responsiveClass: true,
//     dots: true,
//     autoplay: true,
//     smartSpeed: 1000,
//     responsive: {
//         0: {
//             items: 2,
//         },
//         400: {
//             items: 2,
//         },
//         600: {
//             items: 2,
//         },
//         700: {
//             items: 2,
//         },
//         1000: {
//             items: 6,

//         }
//     },
// };
export class AboutUs extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Scriptics | About Us</title>
                    <meta name="description"
                        content="Scriptics Technologies Limited, Incorporated in 2015, is a global IT and Analytics Solutions Provider and Product Engineering Company, accredited with ISO 27001 : 2013,ISO 9001 : 2015."/>
                    <body id="page-case-studies" />
                </Helmet> 
                <div id="about-header">
                    <div className="container">
                        <ul className="about-ul">
                            <li className="about-item"><a className="" href="/about-us/#know-us">Know Us</a></li>
                            <li className="about-item"><a className="" href="/about-us/#work-stratery">Work Strategy</a></li>
                            <li className="about-item"><a className="" href="/">Technology we follow</a></li>
                            <li className="about-item"><a className="" href="/about-us/#industry-we-serve">Industries we serve</a></li>
                            <li className="about-item"><a className="" href="/about-us/#contact-us">Contact Us</a></li>
                            <li className="about-item"><a className="" href="/about-us/#contact-us">Locate Us</a></li>
                        </ul>
                    </div>
                </div>
                <section id="know-us" className="know-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-sm-12 text-center">
                                <h2 className="know-us-head">WE’RE DEVELOPERS, DESIGNERS, DIRECTORS, STRATEGISTS. WE ARE ONE GLOBAL TEAM</h2>
                                <p className="know-us-para">We have over a decade of experience in the creative industry, producing exciting experiences for brands that are as smart, as they are effective.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="team" className="team">
                    <div className="container">
                        <div className="team-row row">
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12 text-center">
                                <div className="align-items-center">
                                    <div className="team_image">
                                        <img src="/assets/img/harsh.png" alt="Harsh Macwan" />
                                    </div>    
                                    <div className="team_desc">
                                        <h4>Harsh Macwan</h4>
                                        <p className="title">CEO</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12 text-center">
                                <div className="align-items-center">
                                    <div className="team_image">
                                        <img src="/assets/img/nirav_patel.png" alt="Nirav Patel" />
                                    </div>    
                                    <div className="team_desc">
                                        <h4>Nirav Patel</h4>
                                        <p className="title">CTO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12 text-center">
                                <div className="align-items-center">
                                    <div className="team_image">
                                        <img src="/assets/img/dr.anu.png" alt="Dr.Anupriya M." />
                                    </div>    
                                    <div className="team_desc">
                                        <h4>Dr.Anupriya M. MDS, PhD</h4>
                                        <p className="title">CMO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-row row">
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12 text-center">
                                <div className="align-items-center">
                                    <div className="team_image">
                                        <img src="/assets/img/abhilasha_malhotra.png" alt="Abhilasha Malhotra" />
                                    </div>    
                                    <div className="team_desc">
                                        <h4>Abhilasha Malhotra, MBA</h4>
                                        <p className="title">CPO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12 text-center">
                                <div className="align-items-center">
                                    <div className="team_image">
                                        <img src="/assets/img/sachin_bhatia.png" alt="Sachin Bhatia" />
                                    </div>    
                                    <div className="team_desc">
                                        <h4>Sachin Bhatia, M.Tech</h4>
                                        <p className="title">COO</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12 text-center">
                                <div className="align-items-center">
                                    <div className="team_image">
                                        <img src="/assets/img/s_taposh.png" alt="S. Taposh" />
                                    </div>    
                                    <div className="team_desc">
                                        <h4>S. Taposh, PMP</h4>
                                        <p className="title">VP – Global business</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-row row">
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12 text-center">
                                <div className="align-items-center">
                                    <div className="team_image">
                                        <img src="/assets/img/viral.png" alt="VIRAL_BHALIA" />
                                    </div>    
                                    <div className="team_desc">
                                        <h4>VIRAL BHALIA</h4>
                                        <p className="title">VP - Engineering</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12 text-center">
                                <div className="align-items-center">
                                    <div className="team_image">
                                        <img src="/assets/img/darpan_patel.png" alt="Darpan Patel" />
                                    </div>    
                                    <div className="team_desc">
                                        <h4>Darpan Patel, M.tech</h4>
                                        <p className="title">VP - Software</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12 text-center">
                                <div className="align-items-center">
                                    <div className="team_image">
                                        <img src="/assets/img/pravesh.png" alt="Pravesh Macwan" />
                                    </div>    
                                    <div className="team_desc">
                                        <h4>Pravesh Macwan, CPA</h4>
                                        <p className="title">VP - Finance</p>
                                    </div>
                                </div>
                            </div>
                        </div>                  
                    </div>
                </section>
                <section className="purpose">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-sm-12 text-center">
                                <h2 className="purpose-head">OUR PURPOSE</h2>
                                <p className="purpose-para">To deliver on the promise of technology and human ingenuity.We embrace the power of change to create long-lasting value in every direction for our clients, people and communities.</p>
                            </div>
                        </div>
                        <div className="counter-row row text-center">
                            <div className="col-12 col-lg-4 col-sm-12">
                                <div className="counter">
                                    <h2 className="timer count-title count-number" data-to="400" data-plus="+" data-speed="1500"></h2>
                                    <p className="count-text ">Scriptics employees Worldwide</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 col-sm-12">
                                <div className="counter">
                                    <h2 className="timer count-title count-number" data-to="7" data-speed="1500"></h2>
                                    <p className="count-text ">Cities with Scriptics locations and operations</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 col-sm-12">
                                <div className="counter">
                                    <h2 className="timer count-title count-number" data-to="15" data-speed="1500"></h2>
                                    <p className="count-text ">Partners in our ecosystem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="work-stratery" className="work-stratery">
                    <div className="col-12 col-lg-12 col-sm-12 text-center">
                        <h2>WORK STRATEGY</h2>
                    </div>
                </section>
                <section className="work-caro work" id={5}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl"></div>
                            <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-xs-12 justify-content-center">
                                <div className="work-post-home">
                                    <div className="rept-work">
                                        <img src="/assets/img/strategy.png" alt="strategy featuremedia"/>
                                        <div className="content-work-home">
                                            <h4 className="title-txt-work">Make the first move with Strategy & Consulting</h4>
                                        </div>
                                        <div className="excerpt-txt-work">    
                                            <p>At Scriptics, our real-world and advanced quality solutions will help you power your digitalization.</p>
                                        </div>
                                    </div>
                                    <div className="rept-work">
                                        <img src="/assets/img/interactive.png" alt="interactive featuremedia"/>
                                        <div className="content-work-home">
                                            <h4 className="title-txt-work">Initial Design with interactive technology</h4>
                                        </div>
                                        <div className="excerpt-txt-work">
                                            <p>Implement technologies to amplify and automate processes without any human intervention.</p>
                                        </div>
                                    </div>    
                                    <div className="rept-work">
                                        <img src="/assets/img/amet.png" alt="amet featuremedia"/>
                                        <div className="content-work-home">
                                            <h4 className="title-txt-work">Scriptics, AI for Gaming experience</h4>
                                        </div>
                                        <div className="excerpt-txt-work">    
                                            <p>Uncover the layers of entertainment with an AI-powered Gaming experience to all the gamers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl"></div>
                        </div>        
                    </div>
                </section>   
                <section id="technology-we-follow" className="technology-follow">
                   {/* <div className="col-12 col-lg-12 col-sm-12 text-center">
                        <h2>TECHNOLOGIES WE FOLLOW</h2>
                    </div>
                    <div className="container">
                        <OwlCarousel className="owl-theme tech-slider" {...opt}>
                            <div className="tech">
                                <img src="/assets/img/team.png"/>
                                <p className="tech-name">Name</p>
                            </div>
                            <div className="tech">
                                <img src="/assets/img/team.png"/>
                                <p className="tech-name">Name</p>
                            </div>
                            <div className="tech">
                                <img src="/assets/img/team.png"/>
                                <p className="tech-name">Name</p>
                            </div>
                            <div className="tech">
                                <img src="/assets/img/team.png"/>
                                <p className="tech-name">Name</p>
                            </div>
                            <div className="tech">
                                <img src="/assets/img/team.png"/>
                                <p className="tech-name">Name</p>
                            </div>
                            <div className="tech">
                                <img src="/assets/img/team.png"/>
                                <p className="tech-name">Name</p>
                            </div>
                            <div className="tech">
                                <img src="/assets/img/team.png"/>
                                <p className="tech-name">Name</p>
                            </div>
                        </OwlCarousel>
                    </div>*/}
                </section>   
                <section id="industry-we-serve" className="indtry-serve">
                    <div className="col-12 col-lg-12 col-sm-12 text-center">
                        <h2>INDUSTRIES WE SERVE</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-3 col-sm-12">
                                <ul className="indtry-list flex-column">
                                    <li> <a className="indtry-link" href="/industry_health">Health</a> </li>
                                    <li> <a className="indtry-link" href="/industry_health">Chemicals</a></li>
                                    <li><a className="indtry-link" href="/industry_retail">Retail</a></li>
                                </ul> 
                            </div>
                            <div className="col-12 col-lg-3 col-sm-12">
                                <ul className="indtry-list flex-column">
                                    <li><a className="indtry-link" href="/industry_automative">Automative</a></li>
                                    <li><a className="indtry-link" href="/industry_dental">Dental</a></li>
                                    <li> <a className="indtry-link" href="/industry_consumer_goods">Consumer Goods</a></li>
                                </ul> 
                            </div>
                            <div className="col-12 col-lg-3 col-sm-12">
                                <ul className="indtry-list flex-column">
                                    <li><a className="indtry-link" href="/industry_bfsi">BFSI</a></li>
                                    <li> <a className="indtry-link" href="/industry_energy">Energy</a></li>
                                    <li><a className="indtry-link" href="/industry_oil_and_gas">Oil and Gas</a></li>
                                </ul> 
                            </div>
                            <div className="col-12 col-lg-3 col-sm-12">
                                <ul className="indtry-list flex-column">
                                    <li><a className="indtry-link" href="/industry_capital_market">Capital Markets</a></li>
                                    <li><a className="indtry-link" href="/industry_insurance">Insurance</a></li>
                                    <li><a className="indtry-link" href="/industry_media_entertainment">Media and Entertainment</a></li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact-us" className="contact-us">
                    <div className="col-12 col-lg-12 col-sm-12 text-center">
                        <h2>CONTACT US</h2>
                    </div>
                    <div className="container">
                        <div className="contact-info row">
                            <div className="col-12 col-lg-12 col-sm-12 text-center" style={{paddingBottom:30}}>
                                <div>
                                <h2>SAY HELLO</h2>
                                <p style={{fontSize:20}}>If you have an interesting project, an RFP, or just need some help, reach out to us. We’re available. We also teach, lecture, give workshops, and love sharing our knowledge, and we’ll literally go anywhere!</p>
                                <a className="cnt-mail" href = "mailto: hello@scriptics.ca">hello@scriptics.ca</a>
                                </div>
                            </div>
                            <div className="contact-adrs col-12 col-lg-2 col-sm-12">
                                <h2>Canada</h2>
                                <p>181 Bay Street,<br/>Toronto, ON<br/> M5J 2T3 <br/>
                                <a href="tel:+1 877-572-7478">+1 877-572-7478</a></p>
                            </div>
                            <div className="contact-adrs col-12 col-lg-2 col-sm-12">
                                <h2>USA</h2>
                                <p>940 Stewart St<br/>Suite14 Morgantown,<br/>WV<br/>26505<br/>
                                <a href="tel:+1 877-572-7478">+1 877-572-7478</a></p>
                            </div>
                            <div className="contact-adrs col-12 col-lg-2 col-sm-12">
                                <h2>London</h2>
                                <p>108 Cheapside,<br/>London<br/>EC2V 6DN<br/>
                                <a href="tel:+1 877-572-7478">+1 877-572-7478</a></p>
                            </div>
                            <div className="contact-adrs col-12 col-lg-2 col-sm-12">
                                <h2>Denmark</h2>
                                <p>Frederikssundsvej 68 E st<br/>tv 2400<br/>København NV<br/>
                                <a href="tel:+45 30 43 23 66">+45 30 43 23 66</a></p>
                            </div>
                            <div className="contact-adrs col-12 col-lg-2 col-sm-12">
                                <h2>Singapore</h2>
                                <p>#19-08 Prudential Tower,<br/> Singapore<br/>049712<br/>
                                <a href="tel:+1 877-572-7478">+1 877-572-7478</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default AboutUs

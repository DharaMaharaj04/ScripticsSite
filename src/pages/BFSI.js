import React from 'react';
import { Helmet } from 'react-helmet';

function BFSI() {
    return (
        <div className="industries-page">
            <Helmet>
            <title>Scritpics | BFSI</title>
            <meta name="description"  content />
            <body id="page-industry" className="industry-health"/>
            </Helmet>
            <div className="spacer"></div>
            <section className="srv-main">
                <div className="container">
                    <div className="row">
                       <div className="col-12 col-sm-12 col-lg-10">
                            <h3 className="indus-cat">industries</h3>
                            <h2 className="">BFSI</h2>
                            <div className="indus-excerpt">
                                <p>We turn your data into actionable insights. Let’s deep dive into the world of data and uncover the hidden patterns.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="srv-img" style={{background:`url(/assets/img/indus_banner.png) no-repeat`}}>
            </section>
            <section className="srv-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="indus-info">
                                <h2 className="indus-title_1">GDPR certified data protection to ensure your institution's data safety.</h2>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                        <div className="indus-info">
                            <p>We track following key matrices month over month/year over year bases for credit card product (Overall as well as DM v/s Non DM; By Card type, Month on book, By customer segment.</p>
                            <ul>
                                <li>Originations, Accounts, Balance Actives, Sales Active</li>
                                <li>Average Purchases, Average Payments, Average Balances</li>
                                <li>Average Credit Limit, Utilization , Yield</li>
                                <li>Number of Transactors, Revolvers, Inactive, pay downs</li>
                                <li>Number of Charge-offs, Delinquents</li>
                            </ul>    
                        </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                            <img className="srv-con-img" src="/assets/img/indus_content.png" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                        </div>
                        <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                            <div className="srv-info">
                                <p className="indus-info">Services we offer:</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="srv-level">
                <div className="container">
                    <div className="row">
                        <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="image_with_text">
                                <img src="/assets/img/choice.svg" alt="industries level icon 1"/>
                                <p>Campaign Analytics: Deriving upcoming campaign’s strategy in a way that optimizes campaign ROI. Overall acquisition, response and approval rate,  Pull through rate,Cost per acquisition, Pay back period, Incremental accounts booked</p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="image_with_text">
                                <img src="/assets/img/discover (1).svg" alt="industries level icon 2"/>
                                <p>Credit line increase: By various data driven predictive algorithms, we can suggest how much credit line increase can be given to which customer segment.</p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="image_with_text">
                                <img src="/assets/img/automation (1).svg" alt="industries level icon 3"/>
                                <p>Fraud Prediction: Ensuring your client's safety. Digging deep into your data, our approach for fraud detection uses multiple analytics techniques and ensures suspicious activity is identified quickly.</p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="image_with_text">
                                <img src="/assets/img/innovation.svg" alt="industries level icon 4"/>
                                <p>Attrition Model: We identify triggers in the buying behaviors of the loyal consumers that pinpoint which customers have the highest chances of drifting away. Predict customer which leave in future.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="capability">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <h2>CAPABILITIES</h2>
                        </div>
                        <div className="srv-capability-box col-12 col-lg-4">
                            <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/robotic.svg" alt="capabilities icon 1"/>
                                    <p>AI-powered data core to deliver insights: Competencies to build a digital foundation that vastly outperforms competition through game changing organizational capabilities by reimagining the core processes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="srv-capability-box col-12 col-lg-4">
                            <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/Mask Group 2.svg" alt="capabilities icon 2"/>
                                    <p>Portfolio Health  Review: We track following key matrices month over month/year over year bases for credit card product (Overall as well as DM v/s Non DM; By Card type, Month on book, By customer segment. </p>
                                </div>
                            </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/Mask Group 5.svg" alt="capabilities icon 3"/>
                                    <p>Segmentation: We help businesses segment/group their current and/or new customer bases into specialized smaller groups that are distinct in their needs, demographics and behavior. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BFSI

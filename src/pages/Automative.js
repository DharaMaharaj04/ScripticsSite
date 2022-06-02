import React from 'react';
import { Helmet } from 'react-helmet';

function Automative() {
    return (
        <div className="industries-page">
        <Helmet>
        <title>Scritpics | Automative</title>
        <meta name="description"  content />
        <body id="page-industry" className="industry-health"/>
        </Helmet>
        <div className="spacer"></div>
        <section className="srv-main">
            <div className="container">
                <div className="row">
                   <div className="col-12 col-sm-12 col-lg-10">
                        <h3 className="indus-cat">industries</h3>
                        <h2 className="">Automative</h2>
                        <div className="indus-excerpt">
                            <p>Enabling enterprises to stay one step ahead of disruptions.</p>
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
                            <h2 className="indus-title_1">SCRIPTICS TRADEMARKED AI DRIVEN HEALTH CONSULTING</h2>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                    <div className="indus-info">
                        <p>You need to be increasingly agile to address disruptions such as inconsistent demand for vehicles and stringent emissions standards. Your automotive enterprise must be a safe place to work while your ecosystem must have a low carbon footprint. In addition, you need to build a responsive supply chain that adapts to the dynamics of procurement, distribution and logistics.</p>
                        <p>The Scriptics Automotive practice partners with next-generation automobile manufacturers to apply predictive modeling-driven insights across business cycles. Our digital ecosystem embeds sustainability into your enterprise: lean operations, product innovation and business agility. Digital re-tooling of the assembly line and supply chain mitigates risks by addressing shifts in the mobility landscape.</p>
                    </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                        <img className="srv-con-img" src="/assets/img/indus_content.png" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                    </div>
                    <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                        <div className="srv-info">
                            <p className="indus-info">Scriptics empowers automotive enterprises to navigate the new normal and become more resilient with the Live Enterprise framework –</p>
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
                            <p>Accelerate migration to the cloud </p>
                        </div>
                    </div>
                    <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="image_with_text">
                            <img src="/assets/img/discover (1).svg" alt="industries level icon 2"/>
                            <p>Ensure resilient IT operations</p>
                        </div>
                    </div>
                    <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="image_with_text">
                            <img src="/assets/img/automation (1).svg" alt="industries level icon 3"/>
                            <p>Establish resilient business processes</p>
                        </div>
                    </div>
                    <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="image_with_text">
                            <img src="/assets/img/innovation.svg" alt="industries level icon 4"/>
                            <p>Enable remote learning at scale</p>
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
                                <p>Scriptics has rich experience in managing cloud-hosted inventory and supply chain solutions. Cloud applications facilitate automation of global manufacturing and logistics processes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="srv-capability-box col-12 col-lg-4">
                        <div className="capa_image_with_text">
                            <div className="capa_img">
                                <img src="/assets/img/Mask Group 2.svg" alt="capabilities icon 2"/>
                                <p>Scriptics helps manufacturers pivot to autonomous IT operations by using AIOps. It streamlines big data management while supporting predictive analytics.</p>
                            </div>
                        </div>
                        </div>
                        <div className="srv-capability-box col-12 col-lg-4">
                            <div className="capa_image_with_text">
                            <div className="capa_img">
                                <img src="/assets/img/Mask Group 5.svg" alt="capabilities icon 3"/>
                                <p>Scriptics integrates immersive technology with role-based content to create an engaging learning experience for upskilling employees.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Automative

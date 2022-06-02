import React from 'react';
import { Helmet } from 'react-helmet';

function Chemical() {
    return (
        <div className="industries-page">
            <Helmet>
            <title>Scritpics | Chemical</title>
            <meta name="description"  content />
            <body id="page-industry" className="industry-health"/>
            </Helmet>
            <div className="spacer"></div>
            <section className="srv-main">
                <div className="container">
                    <div className="row">
                       <div className="col-12 col-sm-12 col-lg-10">
                            <h3 className="indus-cat">industries</h3>
                            <h2 className="">Chemical</h2>
                            <div className="indus-excerpt">
                                <p>Pursue digital transformation along with simplification and automation to efficiently run IT and operations across front to back processes</p>
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
                                <h2 className="indus-title_1">REWRITING PARTNER EXPERIENCE THROUGH INNOVATION</h2>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                        <div className="indus-info">
                            <p>The chemical and process industry is transitioning from being product sellers to solution providers with constant changes in their landscape. Increased cost, reduced growth rate, and inefficient operations are bringing down their performance. Establishing a secure future with increasing revenues and reduced costs is the top priority of organizations. There is a need for players to join the digital revolution, build new business models, provide effective chemical industry consulting, establish process manufacturing software, and raise the bar for operational excellence.</p>
                           <p>Our services help streamline processes, enhance production efficiency of plants and reduce environmental impact. We enable efficient operations management through effective cloud strategies, process manufacturing software, asset management, chemical manufacturing software, and Big Data analytics.</p>
                        </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                            <img className="srv-con-img" src="/assets/img/indus_content.png" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                        </div>
                        <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                            <div className="srv-info">
                                <p className="indus-info">Our extensive experience in chemical industry consulting has put us in the best place to address these industry problems. Embracing our Digital solutions ensures chemical software companies outshine competition and achieve excellence.</p>
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
                                <p>Our Digital & Analytics services helps design and build key platform components of customers’ Digital-Technology-Footprint to power the Digital transformation journey. </p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="image_with_text">
                                <img src="/assets/img/discover (1).svg" alt="industries level icon 2"/>
                                <p>At IoT WoRKS we help create entirely new services that deliver measurable business outcomes. These experience will have an increasing role in differentiating enterprises</p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="image_with_text">
                                <img src="/assets/img/automation (1).svg" alt="industries level icon 3"/>
                                <p>Our Applications business is structured, allowing us to offer clients a full lifecycle of systems integration consulting services and a unified approach to developing the right solutions for their business needs.</p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="image_with_text">
                                <img src="/assets/img/innovation.svg" alt="industries level icon 4"/>
                                <p>Artificial intelligence-driven automation platform. It consists of machine learning components, automation modules, orchestration components, well-proven monitoring tools, knowledge management, and a reporting layer.</p>
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
                                    <p>Our Infrastructure Management Services has some of the most impressive credentials in the IT Vendor landscape. </p>
                                </div>
                            </div>
                        </div>
                        <div className="srv-capability-box col-12 col-lg-4">
                            <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/Mask Group 2.svg" alt="capabilities icon 2"/>
                                    <p>Scriptics's capital market solution suite serves investment banks, prime brokerages, and dealers in alignment with current market standards. </p>
                                </div>
                            </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/Mask Group 5.svg" alt="capabilities icon 3"/>
                                    <p>We are one of the world’s leading and fastest growing global engineering services provider. From product blueprinting to support, from software or hardware to mechanical.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Chemical

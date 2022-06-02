import React from 'react'
import { Helmet } from 'react-helmet'
function MediaEntertainment() {
    return (
        <div className="industries-page">
            <Helmet>
            <title>Scritpics | Media and Entertainment</title>
            <meta name="description"  content />
            <body id="page-industry" className="industry-health"/>
            </Helmet>
            <div className="spacer"></div>
            <section className="srv-main">
                <div className="container">
                    <div className="row">
                       <div className="col-12 col-sm-12 col-lg-10">
                            <h3 className="indus-cat">industries</h3>
                            <h2 className="">Media and Entertainment</h2>
                            <div className="indus-excerpt">
                                <p>Stay on top of user experience with NextGen Digital solutions that wow audiences - and optimize costs simultaneously</p>
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
                                <h2 className="indus-title_1">Being Resilient. That’s Live Enterprise.</h2>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                        <div className="indus-info">
                            <p>Media and entertainment are being disrupted by shifts in technology and audience demographics. You need to respond by enhancing broadcast and streaming services with voice and visual search capabilities, enriching live sports broadcasting with deep insights, and optimizing video quality for diverse devices and form factors. Further, you should deliver personalized content while safeguarding the personal information of subscribers, and protecting digital content from unauthorized access and piracy.</p>
                           <p>The Scriptics Media and Entertainment practice combines automation, data science, artificial intelligence, and immersive technologies to transform the audience experience, accelerate content production, and maximize content monetization. We help publishers and media houses capitalize on smart devices as well as the growing demand for streaming services. Our metadata approach to multimedia content management supports advanced search and accelerates content retrieval.</p>
                        </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                            <img className="srv-con-img" src="/assets/img/indus_content.png" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                        </div>
                        <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                            <div className="srv-info">
                                <p className="indus-info">Scriptics partners with media and entertainment enterprises to become more resilient with the Live Enterprise framework –</p>
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
                                <p>Accelerate migration to the cloud – We develops cloud-hosted content management solutions to simplify search, sharing and consumption of rich content via diverse devices and platforms.</p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="image_with_text">
                                <img src="/assets/img/discover (1).svg" alt="industries level icon 2"/>
                                <p>Ensure resilient IT operations – We modernizes the infrastructure to support advances in imaging, video processing and mobile technologies. </p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="image_with_text">
                                <img src="/assets/img/automation (1).svg" alt="industries level icon 3"/>
                                <p>Establish resilient business processes – We integrates rich media and, grow the subscriber base, drive content consumption, and facilitate programmatic advertising.</p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="image_with_text">
                                <img src="/assets/img/innovation.svg" alt="industries level icon 4"/>
                                <p>Enable remote learning at scale – We e-learning solutions enable production houses and content distributors to share the latest design concepts production techniques and marketing tools with the workforce.</p>
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
                                    <p>Streamline production, management, and distribution of content for optimized workflows, integrated assets, and rights administration. </p>
                                </div>
                            </div>
                        </div>
                        <div className="srv-capability-box col-12 col-lg-4">
                            <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/Mask Group 2.svg" alt="capabilities icon 2"/>
                                    <p>Drive effective content management through an integrated and streamlined digital supply chain.</p>
                                </div>
                            </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/Mask Group 5.svg" alt="capabilities icon 3"/>
                                    <p>Create and publish panalized advertising campaigns on multiple platforms and consistently monitor their performance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MediaEntertainment

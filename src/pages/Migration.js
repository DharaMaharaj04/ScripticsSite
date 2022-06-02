import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Migration extends Component {
    render() {
        return (
            <div className="service-page">
            <Helmet>
                <title>Scritpics | Migration</title>
                <meta name="description" content= "Migration" />
                <body id="page-cloud" />
            </Helmet>
                <div className="spacer"></div>
                <section className="srv-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-6">
                                <h3 className="srv-cat">Cloud Services</h3>
                                <h2 className="">Migration</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="srv-img" style={{background:`url(/assets/img/cloud_service-1.jpg) no-repeat center`}}>
                </section>
                <section className="capability">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <h3 className="text-center cloud_title">Say goodbye to server maintenance! Migrate your business to the cloud</h3>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Fast, Flexible, And Less Overhead</h3>
                                    </div>
                                    <p>Cloud-enabled businesses run programs more efficiently at lower costs with maximum scalable flexibility.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Upskill Your Team With Cloud Expertise</h3>
                                    </div>
                                    <p>Your team will gain new skills and resources through Cloud Deployment with training, tools, and security. Our Solutions Architects will be at your service to help your business reach its goals!</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Ensure Best Practices With AWS Cloud Migration</h3>
                                    </div>
                                    <p>Maintain best practices for Migration while driving organizational change, establishing foundational readiness, and adopting an AWS iterative approach to migration execution.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <h3 className="text-center cloud_text_head">Beyond Left and Shift</h3>
                                    <p>Achieve your goals by embracing cloud-native thinking.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Competitive Edge With The Cloud</h3>
                                    </div>
                                    <p>Unlike wasteful results from your average lift-and-shift migrations, we move your workloads quickly, efficiently, and affordably with our innovative platform and pipeline-driven approach.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

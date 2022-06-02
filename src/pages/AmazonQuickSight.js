import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class AmazonQuickSight extends Component {
    render() {
        return (
            <div className="service-page">
            <Helmet>
                <title>Scritpics | Amazon QuickSight</title>
                <meta name="description" content= "Amazon QuickSight" />
                <body id="page-cloud" />
            </Helmet>
                <div className="spacer"></div>
                <section className="srv-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-6">
                                <h3 className="srv-cat">Cloud Services</h3>
                                <h2 className="">Amazon QuickSight</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="srv-img" style={{background:`url(/assets/img/cloud_service-1.jpg) no-repeat center`}}>
                </section>
                <section className="srv-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="srv-info">
                                    <h3>Scalable, Serverless, Embeddable</h3>
                                    <p className="srv-info">Cloud-Enabled Machine-Learning Business Intelligence Service</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                                <div className="srv-info">
                                    <h3>What is Amazon QuickSight?</h3>
                                    <p>Amazon QuickSight is a scalable, serverless, embeddable, machine learning-powered Business Intelligence (BI) service built for the cloud.</p>
                                    <p>QuickSight lets you easily create and publish interactive BI dashboards that include Machine Learning-powered insights. Access and seamlessly embed dashboards from any device into your applications, portals, and websites.</p>
                                    <p>Automatically scale to tens of thousands of users without managing infrastructure or planning for capacity.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                                <img className="srv-con-img" src="/assets/img/network-cloud.jpg" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="srv-info">
                                <p>QuickSight is the first BI service to offer pay-per-session pricing. Cost-effective for large-scale deployments, pay only when users access their dashboards or reports.</p>
                                <p>Scriptics ensures that your business uses the full capacities of Amazon QuickSight to your competitive advantage.</p>
                                    <h3>How it works</h3>
                                    <p>Scriptics has the #1 Internal AWS Partner Score in the US.<br />Partnering with Amazon Web Services, Scriptics delivers best in class services to companies in any phase of their cloud adoption journey.</p>
                                    <p className="srv-info">These services include : Data Lake and Warehouse, AI Services, Advanced Analytics, Data Assessment, Machine Learning, and Managed Services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="capability">
                    <div className="container">
                        <div className="row">
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <h3 className="text-center cloud_text_head">Ease Of Use</h3>
                                    <p>Renders beautiful graphs, pie charts, scatter plots, heat maps, and pivot tables</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Find Answers Easily With Amazon Quicksight</h3>
                                    </div>
                                    <p>Enter questions using natural language and receive answers in seconds.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Gain Clear Insights From Machine Learning</h3>
                                    </div>
                                    <p>With machine learning, summarize in plain language your business metrics and predict outcomes such as anomaly detection or forecasting without data science experience</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">No Server Maintenance With Quicksight</h3>
                                    </div>
                                    <p>Zero servers to provision and manage. No software to install, maintain, nor operate.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Embedded Analytics</h3>
                                    </div>
                                    <p>Seamlessly view and author dashboards within your applications with QuickSight.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Collaborate On Any Device</h3>
                                    </div>
                                    <p>Access QuickSight from any browser or iPhone app and securely share rich visualizations with key points and conclusions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  
                <section className="faq">
                    <div className="container">
                    <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center" style={{paddingTop:90,paddingBottom:20}}>
                                <h2>Solutions Across Every Step of your Data Journey</h2>
                            </div>
                        </div>
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                         Data Migration
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                    Enhance your existing on-premises data sources in the cloud.<br />
                                    Discovery & Planning, Data Cleaning and Preparation, End-to-End Pipeline-Driven Migration
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                         Data Engineering
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                    Build mature data workflows and democratize your data ingestion.<br/>
                                    Data Lakes, Warehousing, Data Source Identification, Data Pipeline Design and Deployment.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Data Science and Machine Learning
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div className="panel-body">
                                    Uncover actionable insights through your data.<br/>
                                    Machine Learning, Dashboards & Visualization, Data Analytics, Real-time Monitoring & Alerts.
                                    </div>
                                </div>    
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading4">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                        Data Operations
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                                    <div className="panel-body">
                                    Maintain your data processes and operational support.<br />
                                    Managed Data Services, Meeting Production Requirements, Cloud Cost Optimization
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>        
                </section>         
            </div>                
        )
    }
}

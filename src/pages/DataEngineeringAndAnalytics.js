import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default class DataEngineeringAnalytics extends Component {
    render() {
        return (
            <div className="service-page">
            <Helmet>
                <title>Scritpics | DataEngineeringAnalytics</title>
                <meta name="description" content= "Data Engineering & Analytics" />
                <body id="page-service" />
            </Helmet>
                <div className="spacer"></div>
                <section className="srv-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-6">
                                <h3 className="srv-cat">Cloud Services</h3>
                                <h2 className="">Data Engineering & Analytics</h2>
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
                                    <h3>Discover a world of insights</h3>
                                    <p className="srv-info">Turn your data into actionable insights for innovation.Scriptics makes data work for you.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                                <div className="srv-info ">
                                    <p>Scriptics delivers holistic solutions from data collection to visualization to help customers organize and structure data through clear data pipelines to uncover actionable insights.</p>
                                    <h3>Download the Whitepaper</h3>
                                    <p>Drive revenue and differentiation by converting data into tailored products, offers, recommendations, and messages for individual customers. Enhance your understanding of AWS and automate data analytics with the following eBook.</p>
                                    <div className="inner-btn">
                                        <button className="btn-group cloud_btn inside-btn"><a href='https://d0.awsstatic.com/whitepapers/Big_Data_Analytics_Options_on_AWS.pdf'>Get the Guide<i><img className= "i-img" src="/assets/img/Icon.svg" alt="arrow-icon"/></i></a></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                                <img className="srv-con-img" src="/assets/img/network-cloud.jpg" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="capability cloud_pro">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <h3 className="text-center cloud_title">Build data pipelines that drive your business</h3>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <h3 className="text-center cloud_text_head">Locate and Centralize Your Data</h3>
                                    <p>Solve data problems such as disparate data sources, unreliable and error-prone batched data pipelines, and lack of knowledge about which data you have. Data-driven decisions without barriers.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Streamline Your Data Pipelines</h3>
                                    </div>
                                    <p>Gain a clear path from data ingestion through data pipelines to actionable insights. We tailor to your data needs, offering real-time monitoring and alerting, data lakes, visualization, data warehousing, analytics, and machine learning.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Fast-Track Your Process</h3>
                                    </div>
                                    <p>Turn your data into a tool for success with Scriptics’s proven process and AWS native tools. Leverage our team’s expertise from data migration to machine learning and AI.</p>
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

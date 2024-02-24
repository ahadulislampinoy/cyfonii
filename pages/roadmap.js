import Accordion from "@/components/elements/Accordion"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Roadmap() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Road Map">
            <div className="page-roadmap">
                    <section className="roadmap">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h6 className="sub-heading"><span>Road Map</span></h6>
                                        <h3 className="heading">The Journey  <br />
                                            Cyfonii NFT</h3>
                                    </div>
                                    <div className="roadmap__main">
                                        <div className="roadmap-box">
                                            <div className="time">February 01, 2024</div>
                                            <div className="content">
                                                <h5 className="title">Idea Generation</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="roadmap-box right">
                                            <div className="time">February 01, 2024</div>
                                            <div className="content">
                                                <h5 className="title">Design &amp; Development</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="roadmap-box">
                                            <div className="time">February 01, 2024</div>
                                            <div className="content">
                                                <h5 className="title">Initial Release</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="roadmap-box right">
                                            <div className="time">February 01, 2022</div>
                                            <div className="content">
                                                <h5 className="title">Result &amp; Final Report</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="roadmap-box">
                                            <div className="time">February 01, 2022</div>
                                            <div className="content">
                                                <h5 className="title">Design &amp; Development</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="roadmap-box right">
                                            <div className="time">February 01, 2022</div>
                                            <div className="content">
                                                <h5 className="title">Design &amp; Development</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="roadmap-box">
                                            <div className="time">February 01, 2022</div>
                                            <div className="content">
                                                <h5 className="title">Design &amp; Development</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="roadmap-box right">
                                            <div className="time">February 01, 2022</div>
                                            <div className="content">
                                                <h5 className="title">Design &amp; Development</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="roadmap-box">
                                            <div className="time">February 01, 2022</div>
                                            <div className="content">
                                                <h5 className="title">Design &amp; Development</h5>
                                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                                            </div>
                                        </div>
                                        <div className="icon" />
                                        <div className="icon bottom" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section className="faq s3">
                        <div className="shape" />
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-md-12">
                                    <div className="block-text">
                                        <h6 className="sub-heading"><span>FAQs</span></h6>
                                        <h3 className="heading">Frequently
                                            <br />
                                            Aksed Questions</h3>
                                        <p>Below is a list of frequently asked questions and answers from partners and 3D artist. Please check this FAQ first before contacting us.</p>
                                    </div>
                                    <Accordion oneCol/>
                                </div>
                                <div className="col-xl-6 col-md-12">
                                    <div className="image">
                                        <img src="/assets/images/layouts/img-faq.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}
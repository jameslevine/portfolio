import React, { useState } from "react";

import { FaLink } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import ModalVideo from "react-modal-video";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";

const PortfolioInfo = {
  ticketmaster: {
    title: "Ticketmaster",
    subtitle:
      "Multinational organisation with over 170 million customers in 17 different countries.",
    bannerImage: "bg_image--4",
    role: "Front-end developer",
    articleSubtitle:
      "Working at Ticketmaster involved working closely with several different teams, including product, QA and the back-end team using scrum and agile daily. Testing, robust code and continuous integration was a priority to ensure no loss of revenue due to downtime.",
    articleDescription1:
      "I focused on the part of the website from when a user selects a ticket through to just prior to payment for that ticket. I created features designed to make the purchase process as easy as possible, including an upselling feature when no tickets are available. My features were deployed and used daily by millions of users.",
    tagTitle1: "Languages",
    tagDescription1: "React, Node",
    tagTitle2: "Location",
    tagDescription2: "London",
    tagTitle3: "",
    tagDescription3: "",
    video: false,
    videoThumbnail: "",
    photo1: "portfolio-big-02.jpg",
    photo2: "portfolio-big-03.jpg",
    socialShare: [
      { Social: <FaLink />, link: "https://www.ticketmaster.co.uk/" },
    ],
  },
  chargedup: {
    title: "ChargedUp",
    subtitle:
      "Europe's largest phone-charging network. During the coronavirus pandemic, ChargedUp expanded successfully into hand sanitiser and applications for the pub and restaurant industry",
    bannerImage: "bg_image--5",
    role: "Full-stack Developer",
    articleSubtitle:
      "I joined ChargedUp to help across all their tech stack, covering all their products and helping them to build stable and robust web and mobile applications at speed.",
    articleDescription1:
      "Whilst working at ChargedUp, I committed code on the front-end (React) and back-end (AWS, Serverless lambdas, Node.js, with DynamoDB and Terraform. Continuous integration and stable, tested code was important due to the number of customers who relied on their products.",
    articleDescription2:
      "Part of my role was to investigate new technologies and tools that could help ChargedUp grow as fast as possible, these included (but were not limited to) Open Banking, native Android tablet applications using NFC for reading credit card data, and reverse engineering iOS, Android and web application APIs",
    tagTitle1: "Languages",
    tagDescription1: "React, React-Native, Node, AWS, Serverless",
    tagTitle2: "Location",
    tagDescription2: "London",
    tagTitle3: "",
    tagDescription3: "",
    video: true,
    videoThumbnail: "portfolio-big-01.jpg",
    videoThumbnail2: "portfolio-big-06.jpg",
    photo1: "portfolio-big-04.jpg",
    photo2: "portfolio-big-05.jpg",
    socialShare: [
      { Social: <FaLink />, link: "https://www.chargedup.green/" },
      { Social: <FaLink />, link: "https://www.servedup.green/" },
    ],
  },
};

const PortfolioDetails = ({ match }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { client } = match.params;
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Portfolio Details" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <div
        className={`rn-page-title-area pt--120 pb--190 bg_image ${PortfolioInfo[client].bannerImage}`}
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">
                  {PortfolioInfo[client].title}
                </h2>
                <p>{PortfolioInfo[client].subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Portfolio Details */}
      <div className="rn-portfolio-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-details">
                <div className="inner">
                  <h2>{PortfolioInfo[client].role}</h2>
                  <p className="subtitle">
                    {PortfolioInfo[client].articleSubtitle}
                  </p>
                  <p>{PortfolioInfo[client].articleDescription1} </p>
                  <p>{PortfolioInfo[client].articleDescription2} </p>
                  <div className="portfolio-view-list d-flex flex-wrap">
                    <div className="port-view">
                      <span>{PortfolioInfo[client].tagTitle1}</span>
                      <h4>{PortfolioInfo[client].tagDescription1}</h4>
                    </div>

                    <div className="port-view">
                      <span>{PortfolioInfo[client].tagTitle2}</span>
                      <h4>{PortfolioInfo[client].tagDescription2}</h4>
                    </div>

                    <div className="port-view">
                      <span>{PortfolioInfo[client].tagTitle3}</span>
                      <h4>{PortfolioInfo[client].tagDescription3}</h4>
                    </div>
                  </div>

                  <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                    <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                      {PortfolioInfo[client].socialShare.map((val, i) => (
                        <li key={i}>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`${val.link}`}
                          >
                            {val.Social}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="portfolio-thumb-inner">
                  {PortfolioInfo[client].video && (
                    <div className="thumb position-relative mb--30">
                      <img
                        src={`/assets/images/portfolio/${PortfolioInfo[client].videoThumbnail}`}
                        alt="Portfolio Images"
                      />
                      <ModalVideo
                        channel="youtube"
                        isOpen={isOpen}
                        videoId="03F0Vc0QT5A"
                        onClose={() => setIsOpen(false)}
                      />
                      <button
                        className="video-popup position-top-center"
                        onClick={() => openModal()}
                      >
                        <span className="play-icon"></span>
                      </button>
                    </div>
                  )}
                  {PortfolioInfo[client].video && (
                    <div className="thumb position-relative mb--30">
                      <img
                        src={`/assets/images/portfolio/${PortfolioInfo[client].videoThumbnail2}`}
                        alt="Portfolio Images"
                      />
                      <ModalVideo
                        channel="youtube"
                        isOpen={isOpen}
                        videoId="J_4MKz5bnR4"
                        onClose={() => setIsOpen(false)}
                      />
                      <button
                        className="video-popup position-top-center"
                        onClick={() => openModal()}
                      >
                        <span className="play-icon"></span>
                      </button>
                    </div>
                  )}

                  <div className="thumb mb--30">
                    <img
                      src={`/assets/images/portfolio/${PortfolioInfo[client].photo1}`}
                      alt="Portfolio Images"
                    />
                  </div>

                  <div className="thumb">
                    <img
                      src={`/assets/images/portfolio/${PortfolioInfo[client].photo2}`}
                      alt="Portfolio Images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Details */}
      {/* 
                Start Related Work
                <div className="portfolio-related-work pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="theme-color font--18 fontWeight600">Related Work</span>
                                    <h2>Our Other Clients</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10">
                            Start Single Portfolio
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-01.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Digital Analysis</a></h4>
                                        <span className="category">Technique</span>
                                    </div>
                                </div>
                            </div>
                             End Single Portfolio
                            Start Single Portfolio
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-02.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Plan Management</a></h4>
                                        <span className="category">PLANNING</span>
                                    </div>
                                </div>
                            </div>
                             End Single Portfolio
                        </div>
                    </div>
                </div>
                End Related Work */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </React.Fragment>
  );
};
export default PortfolioDetails;

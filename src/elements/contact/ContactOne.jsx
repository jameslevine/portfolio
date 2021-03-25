import React, { Component } from "react";
import emailjs from "emailjs-com";

class ContactOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      success: "",
    };
  }

  handleSubmit = (e) => {
    const templateParams = {
      from_name: this.state.name,
      email_address: this.state.email,
      reply_to: this.state.email,
      phone: this.state.phone,
      subject: this.state.subject,
      message_body: this.state.message,
    };
    emailjs
      .send(
        "service_588piud",
        "template_1upurof",
        templateParams,
        "user_jgKWfixrI8SFpLJqQc7pf"
      )
      .then(() =>
        this.setState({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
          success: "Message successfully sent!",
        })
      )
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">Hire Me.</h2>
                <p className="description">
                  I am available for contract, permanent and remote-based work.
                  I am flexible and able to relocate too. Connect with me via
                  phone: <a href="tel:+4407590060709">+44 (0) 7590 060 709</a>{" "}
                  or email:{" "}
                  <a href="mailto:jamesalexanderlevine@gmail.com">
                    jamesalexanderlevine@gmail.com
                  </a>{" "}
                </p>
              </div>
              <div className="form-wrapper">
                <form
                  name="contact"
                  data-netlify="true"
                  onSubmit={this.handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <label htmlFor="item01"></label>
                  <input
                    type="text"
                    name="name"
                    required
                    id="item01"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Your Name *"
                  />

                  <label htmlFor="item02"></label>
                  <input
                    type="text"
                    name="email"
                    required
                    id="item02"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Your email *"
                  />

                  <label htmlFor="item05"></label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    id="item05"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    placeholder="Your phone *"
                  />

                  <label htmlFor="item03"></label>
                  <input
                    type="text"
                    required
                    name="subject"
                    id="item03"
                    value={this.state.subject}
                    onChange={this.handleChange}
                    placeholder="Write a Subject"
                  />
                  <label htmlFor="item04"></label>
                  <textarea
                    type="text"
                    id="item04"
                    required
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    placeholder="Your Message"
                  />
                  <button
                    className="rn-button-style--2 btn-solid"
                    type="submit"
                    id="mc-embedded-subscribe"
                  >
                    Submit
                  </button>
                  <div class="text">
                    <p>{this.state.success}</p>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <img src="/assets/images/about/about-6.jpg" alt="trydo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactOne;

import React, { Component } from "react";

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class ContactOne extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            success: ''
        };
    }

    handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            success: 'Message successfully sent!',
        }))
          .catch(error => alert(error));
  
        e.preventDefault();
      };

      handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">Hire Me.</h2>
                                <p className="description">I am available for contract, permanent and remote-based work. I am flexible and able to relocate too. Connect with me via phone: <a href="tel:+4407590060709">+44 (0) 7590 060 709</a> or email: <a href="mailto:jamesalexanderlevine@gmail.com">jamesalexanderlevine@gmail.com</a> </p>
                            </div>
                            <div className="form-wrapper">

                                <form name="contact" data-netlify="true" onSubmit={this.handleSubmit}>
                                {/* <input type="hidden" name="form-name" value="contact" /> */}
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            id="item01"
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            required
                                            id="item02"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            required
                                            name="subject"
                                            id="item03"
                                            value={this.state.subject}
                                            onChange={this.handleChange}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            required
                                            name="message"
                                            value={this.state.message}
                                            onChange={this.handleChange}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" id="mc-embedded-subscribe">Submit</button>
                                    <div class="text"><p>{this.state.success}</p></div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/about/about-6.jpg" alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactOne;
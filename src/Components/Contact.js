import React, { Component } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userId = process.env.REACT_APP_EMAILJS_USER_ID;

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };

    this.form = React.createRef();
  }

  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, this.form.current, userId)
      .then(
        (result) => {
          console.log(result.text);
          this.setState({ message: "Your message was sent, thank you!" });
        },
        (error) => {
          console.log(error.text);
          this.setState({ message: "Error sending the message" });
        }
      );
  };

  render() {
    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{this.state.message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form ref={this.form} onSubmit={this.sendEmail}>
              <div className="form-input">
              <label>Name</label>
              <input type="text" name="user_name" />
            </div>
            <div className="form-input">
              <label>Email</label>
              <input type="email" name="user_email" />
            </div>
            <div className="form-input">
              <label>Message</label>
              <textarea name="message" />
            </div>
            <div className="form-button">
            <input type="submit" value="Send" className="send-button" />

            </div>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Contact Information</h4>
                <p>
                  <span>Phone: 917-916-3979</span>
                  <br />
                  <span>Email: lucas.longacre@gmail.com</span>
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;

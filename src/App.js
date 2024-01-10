import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import { Helmet } from "react-helmet";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      testimonials: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: (data) => {
        this.setState({ resumeData: data });
      },      
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  getTestimonialData() {
    $.ajax({
      url: "./testimonialData.json",
      dataType: "json",
      cache: false,
      success: (data) => {
        this.setState({ testimonialData: data });
      },      
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
    this.getTestimonialData();
  }

  render() {
    return (
      <div className="App">
               <Helmet>
                <title>Lucas Longacre - AI Consultant, Product Manager, Full Stack Developer</title>
                <meta
                  name="description"
                  content="Experienced AI consultant, product manager, and full stack developer. Crafting innovative solutions and driving business success in AI, product management, and software development. Explore my portfolio and resume."
                />
                <meta
                  name="keywords"
                  content="AI consultant, product manager, full stack developer, innovative solutions, business success, AI, product management, software development"
                />
                <meta name="author" content="Lucas Longacre" />
                <meta property="og:image" content={`${process.env.PUBLIC_URL}/css/images/LucasLongacre_site_preview.jpg`} />


              </Helmet>

        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.testimonialData} />
        <Resume data={this.state.resumeData.resume} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;

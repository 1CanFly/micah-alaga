import React, { Component } from "react";

import HomeCarousel from "./HomeCarousel/HomeCarousel";
import classes from "./Home.module.css";
import IntroRow from "../../components/IntroRow/IntroRow";
import TakeALook from "../../components/TakeALook/TakeALook";
import HomeMiniCarousel from "./HomeMiniCarousel/HomeMiniCarousel";
import BookSection from "../BookSection/BookSection";
import { updateObject } from "../../shared/utility";

class Home extends Component {
  state = {
    bookForm: {
      name: {
        className: "name",
        config: { type: "text", placeholder: "Name" },
        value: ""
      },
      phone: {
        className: "phone",
        config: { type: "text", placeholder: "Phone" },
        value: ""
      },
      email: {
        className: "email",
        config: { type: "email", placeholder: "E-mail" },
        value: ""
      },
      persons: {
        className: "persons",
        config: { type: "text", placeholder: "Number Of Persons" },
        value: ""
      },
      date: {
        className: "date",
        config: { type: "date" },
        value: ""
      },
      time: {
        className: "time",
        config: { type: "text", placeholder: "Time" },
        value: ""
      },
      message: {
        className: "message",
        config: { type: "text", placeholder: "Special requests" },
        value: ""
      }
    }
  };

  submit = event => {
    event.preventDefault();
  };
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(
      this.state.bookForm[inputIdentifier],
      {
        value: event.target.value
      }
    );

    const updatedbookForm = updateObject(this.state.bookForm, {
      [inputIdentifier]: updatedFormElement
    });

    this.setState({ bookForm: updatedbookForm });
  };

  bookingEndedHandler = () => {
    this.setState({ booking: false });
  };

  bookingStarted = () => {
    this.setState({ booking: true });
  };

  render() {
    return (
      <div className={classes.Home}>
        <HomeCarousel />
        <IntroRow />
        <TakeALook />
        <HomeMiniCarousel />
        <BookSection
          form={this.state.bookForm}
          changed={this.inputChangedHandler}
          submit={this.submit}
        />
      </div>
    );
  }
}

export default Home;

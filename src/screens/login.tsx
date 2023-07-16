import React, { Component } from "react";
import "../styles/lo.css";
import { onClickLogin } from "../methods/login";

export default class LoginScreen extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      loading: false,
    };
  }
  render() {
    return (
      <div className="loA">
        <div className="loAa">
          <div className="loAaA" />
          <form className="loAaB" onSubmit={(e) => onClickLogin(e, this)}>
            <div className="loAaBa">Log In</div>
            <input id="org" className="loAaBb" placeholder="Organization" />
            <input id="user" className="loAaBb" placeholder="Who I'm" />
            <input
              id="password"
              className="loAaBb"
              type="password"
              placeholder="Password"
            />
            <button className="btn1" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

import { Component } from "react";
import "./index.css";
import { USER } from "../../modules/serviceInit";

export default class HomeLayout extends Component<any> {
  render() {
    return (
      <div className="homeLayout">
        <div className="hlA">
          <div className="hlAc">
            <div className="hlAcA">A</div>
            <div className="hlAcB">
              <div className="hlAcBa">Hi, {USER?.name}</div>
              <div className="hlAcBb">
                {USER?.org}, {USER?.user}
              </div>
              <div
                className="hlAcBc"
                onClick={() => this.props.setRoute("login")}
              >
                Logout
              </div>
            </div>
          </div>
          <div
            className="hlAd"
            onClick={() => this.props.setRoute("dashboard")}
          >
            <div className="hlAdA" />
            <div className="hlAdB">Dashboard</div>
          </div>
          <div className="hlAd" onClick={() => this.props.setRoute("product")}>
            <div className="hlAdA product" />
            <div className="hlAdB">Products</div>
          </div>
          <div className="hlAd" onClick={() => this.props.setRoute("sale")}>
            <div className="hlAdA sale" />
            <div className="hlAdB">Sale</div>
          </div>
          <div className="hlAd" onClick={() => this.props.setRoute("purchase")}>
            <div className="hlAdA purchase" />
            <div className="hlAdB">Purchase</div>
          </div>
          <div className="hlAd" onClick={() => this.props.setRoute("staff")}>
            <div className="hlAdA staff" />
            <div className="hlAdB">Staffs</div>
          </div>
        </div>
      </div>
    );
  }
}

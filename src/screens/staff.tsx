import { Component } from "react";
import HomeLayout from "../widgets/homeLayout";
import { getAllStaffs } from "../methods/staff";

export default class StaffScreen extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      allStaffs: [],
    };
  }
  componentDidMount(): void {
    getAllStaffs(this);
  }

  _onClickAddStaff = () => {
    this.props.setRoute("addStaff");
  };

  _onClickStaff = (it: any) => {
    const data = JSON.parse(JSON.stringify(it));
    this.props.setRoute("addStaff", data);
  };

  render() {
    const { allStaffs }: any = this.state;

    return (
      <div style={{ marginLeft: 60 }}>
        <div className="myTop">
          <div className="a">Staffs</div>
          <button className="btn1" onClick={this._onClickAddStaff}>
            + Add Staff
          </button>
        </div>
        <div className="myTable">
          <div className="a">
            <div className="aA">All Staffs</div>
            <input className="aB" placeholder="Search..." />
          </div>
          <div className="b">
            <div className="bA" style={{ width: "5%" }}>
              No
            </div>
            <div className="bA" style={{ width: "50%" }}>
              Name
            </div>
            <div className="bA" style={{ width: "15%" }}>
              Joined Date
            </div>
            <div className="bA" style={{ width: "15%" }}>
              Type
            </div>
            <div className="bA" style={{ width: "15%" }}>
              Status
            </div>
          </div>
          {allStaffs.map((it: any, k: any) => (
            <div className="c" key={k} onClick={() => this._onClickStaff(it)}>
              <div className="cA" style={{ width: "5%" }}>
                {k + 1}
              </div>
              <div className="cA" style={{ width: "50%" }}>
                {it?.user}
              </div>
              <div className="cC" style={{ width: "15%" }}>
                {it?.doj}
              </div>
              <div className="cC" style={{ width: "15%" }}>
                {it?.type}
              </div>
              <div className="cC" style={{ width: "15%" }}>
                {it?.status}
              </div>
            </div>
          ))}
          <div className="d">
            <div className="dA"></div>
            <div className="dB">
              <div className="dBa"></div>
            </div>
          </div>
        </div>
        <HomeLayout
          data={this.props.routeData}
          setRoute={this.props.setRoute}
        />
      </div>
    );
  }
}

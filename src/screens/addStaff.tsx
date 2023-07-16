import { Component } from "react";
import HomeLayout from "../widgets/homeLayout";
import { onAddStaff, onDeleteStaff } from "../methods/addStaff";

export default class AddStaffScreen extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      staff: {},
    };
  }
  componentDidMount(): void {
    if (this.props.data) this.setState({ staff: this.props.data ?? {} });
  }

  _onClickBack = (e: any) => {
    e.preventDefault();
    this.props.setRoute("staff");
  };

  render() {
    const { staff, error }: any = this.state;
    const isEdit = staff?.hasOwnProperty("_id");
    return (
      <div style={{ marginLeft: 60 }}>
        <div className="myTop">
          <div className="a">Add Staff</div>
        </div>
        <form
          className="myForm"
          onChange={(e) => this.setState({ staff })}
          onSubmit={(e) => onAddStaff(e, this)}
        >
          <div className="a">
            <div className="aA">Generel Details</div>
            <div className="aB" />
          </div>
          <div className="b">
            <div className="bA">Name*</div>
            <input
              className="bB"
              value={staff?.name}
              onChange={(e) => (staff.name = e.target.value)}
              placeholder="Enter staff name"
            />
          </div>
          <div className="b">
            <div className="bA">User Name*</div>
            <input
              className="bB"
              value={staff?.user}
              onChange={(e) => (staff.user = e.target.value)}
              placeholder="Create user name"
            />
          </div>
          <div className="b">
            <div className="bA">Password*</div>
            <input
              className="bB"
              value={staff?.password}
              onChange={(e) => (staff.password = e.target.value)}
              placeholder="Create password"
            />
          </div>
          <div className="b">
            <div className="bA">Phone*</div>
            <input
              className="bB"
              value={staff?.phone}
              onChange={(e) => (staff.phone = e.target.value)}
              placeholder="Phone 1"
              type="number"
            />
          </div>
          <div className="b">
            <div className="bA">Phone 2*</div>
            <input
              className="bB"
              value={staff?.phone2}
              onChange={(e) => (staff.phone2 = e.target.value)}
              placeholder="Phone 2"
              type="number"
            />
          </div>
          <div className="b">
            <div className="bA">Email</div>
            <input
              className="bB"
              value={staff?.email}
              onChange={(e) => (staff.email = e.target.value)}
              placeholder="example@gmail.com"
            />
          </div>
          <div className="b">
            <div className="bA">Date of Birth</div>
            <input
              className="bB"
              value={staff?.dob}
              onChange={(e) => (staff.dob = e.target.value)}
              type="date"
            />
          </div>
          <div className="b">
            <div className="bA">Joining Date</div>
            <input
              className="bB"
              value={staff?.doj}
              onChange={(e) => (staff.doj = e.target.value)}
              type="date"
            />
          </div>
          <div className="a">
            <div className="aA">Profile Details</div>
            <div className="aB" />
          </div>
          <div className="b">
            <div className="bA">Type*</div>
            <select
              className="bB"
              value={staff?.type}
              onChange={(e) => (staff.type = e.target.value)}
            >
              <option hidden>Select staff type</option>
              <option value="Admin">Admin</option>
              <option value="Staff">Staff</option>
            </select>
          </div>
          <div className="b">
            <div className="bA">Salary (Annual)</div>
            <input
              className="bB"
              value={staff?.salary}
              onChange={(e) => (staff.salary = e.target.value)}
              placeholder="0.00"
              type="number"
            />
          </div>
          <div className="d">
            <div className="errorMsg">{error}</div>
            <button className="dA btn2" onClick={this._onClickBack}>
              Back
            </button>
            {isEdit ? (
              <button
                className="dA btn3"
                onClick={(e) => onDeleteStaff(e, this)}
              >
                Delete
              </button>
            ) : null}
            <button className="dA btn1" type="submit">
              {isEdit ? "Save" : "Add"}
            </button>
          </div>
        </form>
        <HomeLayout
          data={this.props.routeData}
          setRoute={this.props.setRoute}
        />
      </div>
    );
  }
}

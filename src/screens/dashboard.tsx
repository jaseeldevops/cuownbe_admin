import { Component } from "react";
import HomeLayout from "../widgets/homeLayout";
import "../styles/da.css";
import { getAllDashboardData } from "../methods/dashboard";

export default class DashboardScreen extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      allData: [],
    };
  }
  componentDidMount(): void {
    getAllDashboardData(this);
  }

  render() {
    const { allData }: any = this.state;

    return (
      <div style={{ marginLeft: 60 }}>
        <div className="myTop">
          <div className="a">Dashboard</div>
        </div>
        <div className="da">
          <div className="daA">
            {allData?.map((it: any, k: any) => (
              <div className="daAa" key={k}>
                <div className="daAaA"></div>
                <div className="daAaB">
                  <div className="daAaBa">{it.title}</div>
                  <div className="daAaBb">{it.value}</div>
                </div>
              </div>
            ))}
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

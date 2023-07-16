import { Component } from "react";
import HomeLayout from "../widgets/homeLayout";
import { getAllPurchases } from "../methods/purchase";

export default class PurchaseScreen extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      allPurchases: [],
    };
  }
  componentDidMount(): void {
    getAllPurchases(this);
  }

  _onClickAddPurchase = () => {
    this.props.setRoute("addPurchase");
  };

  _onClickPurchase = (it: any) => {
    const data = JSON.parse(JSON.stringify(it));
    this.props.setRoute("addPurchase", data);
  };

  render() {
    const { allPurchases }: any = this.state;
    return (
      <div style={{ marginLeft: 60 }}>
        <div className="myTop">
          <div className="a">Purchase</div>
          <button className="btn1" onClick={this._onClickAddPurchase}>
            + Add Purchase
          </button>
        </div>
        <div className="myTable">
          <div className="a">
            <div className="aA">All Purchases</div>
            <input className="aB" placeholder="Search..." />
          </div>
          <div className="b">
            <div className="bA" style={{ width: "70%" }}>
              Supplier Name
            </div>
            <div className="bA" style={{ width: "15%" }}>
              Date
            </div>
            <div className="bA" style={{ width: "15%" }}>
              Total Price
            </div>
            <div className="bA" style={{ width: "15%" }}>
              Count
            </div>
          </div>
          {allPurchases.map((it: any, k: any) => (
            <div
              className="c"
              key={k}
              onClick={() => this._onClickPurchase(it)}
            >
              <div className="cA" style={{ width: "70%" }}>
                {it?.supplier}
              </div>
              <div className="cC" style={{ width: "15%" }}>
                {it?.date}
              </div>
              <div className="cC" style={{ width: "15%" }}>
                {it?.totalPrice}
              </div>
              <div className="cC" style={{ width: "15%" }}>
                {it?.list?.length}
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

import { Component } from "react";
import HomeLayout from "../widgets/homeLayout";
import { getAllSales } from "../methods/sale";

export default class SaleScreen extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      allSales: [],
    };
  }
  componentDidMount(): void {
    getAllSales(this);
  }

  _onClickAddSale = () => {
    this.props.setRoute("addSale");
  };

  _onClickSale = (it: any) => {
    const data = JSON.parse(JSON.stringify(it));
    this.props.setRoute("addSale", data);
  };

  render() {
    const { allSales }: any = this.state;

    return (
      <div style={{ marginLeft: 60 }}>
        <div className="myTop">
          <div className="a">Sales</div>
          <button className="btn1" onClick={this._onClickAddSale}>
            + Add Sale
          </button>
        </div>
        <div className="myTable">
          <div className="a">
            <div className="aA">All Sales</div>
            <input className="aB" placeholder="Search..." />
          </div>
          <div className="b">
            <div className="bA" style={{ width: "70%" }}>
              Customer Name
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
          {allSales.map((it: any, k: any) => (
            <div className="c" key={k} onClick={() => this._onClickSale(it)}>
              <div className="cA" style={{ width: "70%" }}>
                {it?.customer}
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

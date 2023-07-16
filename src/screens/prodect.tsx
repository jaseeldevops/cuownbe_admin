import { Component } from "react";
import { getAllProducts, getSearchProducts } from "../methods/product";
import HomeLayout from "../widgets/homeLayout";

export default class ProdectScreen extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      allProducts: [],
    };
  }
  componentDidMount(): void {
    getAllProducts(this);
  }

  _onClickAddProdect = () => {
    this.props.setRoute("addProduct");
  };

  _onClickProdect = (it: any) => {
    this.props.setRoute("addProduct", it);
  };

  render() {
    const { allProducts }: any = this.state;
    return (
      <div style={{ marginLeft: 60 }}>
        <div className="myTop">
          <div className="a">Products</div>
          <button className="btn1" onClick={this._onClickAddProdect}>
            + Add Prodect
          </button>
        </div>
        <div className="myTable">
          <div className="a">
            <div className="aA">All Products</div>
            <input
              className="aB"
              placeholder="Search..."
              onChange={(e) => getSearchProducts(e, this)}
            />
          </div>
          <div className="b">
            <div className="bA" style={{ width: "5%" }}>
              No.
            </div>
            <div className="bA" style={{ width: "70%" }}>
              Name
            </div>
            <div className="bA" style={{ width: "15%" }}>
              Purchase Price
            </div>
            <div className="bA" style={{ width: "15%" }}>
              Selling Price
            </div>
            <div className="bA" style={{ width: "15%" }}>
              MRP
            </div>
          </div>
          {allProducts.map((it: any, k: any) => (
            <div className="c" key={k} onClick={() => this._onClickProdect(it)}>
              <div className="cA" style={{ width: "5%" }}>
                {k + 1}
              </div>
              <div className="cA" style={{ width: "70%" }}>
                {it.name}
              </div>
              <div className="cC" style={{ width: "15%" }}>
                {it.purchasePrice}
              </div>
              <div className="cC" style={{ width: "15%" }}>
                {it.sellingPrice}
              </div>
              <div className="cC" style={{ width: "15%" }}>
                {it.mrp}
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

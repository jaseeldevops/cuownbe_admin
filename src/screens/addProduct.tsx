import { Component } from "react";
import { onAddProduct, onDeleteProduct } from "../methods/addProduct";
import HomeLayout from "../widgets/homeLayout";
import { Product } from "../modules/product";

export default class AddProductScreen extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      product: new Product(),
    };
  }
  componentDidMount(): void {
    if (this.props.data) {
      this.setState({ product: this.props.data });
    }
  }

  _onClickBack = (e: any) => {
    e.preventDefault();
    this.props.setRoute("product");
  };

  render() {
    const { product, error }: any = this.state;
    const isEdit = product?.hasOwnProperty("_id");

    return (
      <div style={{ marginLeft: 60 }}>
        <div className="myTop">
          <div className="a">Add Product</div>
        </div>
        <form
          className="myForm"
          onChange={(e) => this.setState({ product })}
          onSubmit={(e) => onAddProduct(e, this)}
        >
          <div className="a">
            <div className="aA">Generel Details</div>
            <div className="aB" />
          </div>
          <div className="b">
            <div className="bA">Name*</div>
            <input
              className="bB"
              value={product?.name}
              onChange={(e) => (product.name = e.target.value)}
              placeholder="Enter product name"
            />
          </div>
          <div className="b">
            <div className="bA">Description</div>
            <input
              className="bB"
              value={product?.desc}
              onChange={(e) => (product.desc = e.target.value)}
              placeholder="Enter Description"
            />
          </div>
          <div className="b">
            <div className="bA">Category*</div>
            <input
              className="bB"
              value={product?.category}
              onChange={(e) => (product.category = e.target.value)}
              placeholder="Select Category"
            />
          </div>
          <div className="b">
            <div className="bA">Selling Unit*</div>
            <input
              className="bB"
              value={product?.unit}
              onChange={(e) => (product.unit = e.target.value)}
              placeholder="Kg"
            />
          </div>
          {/*  */}
          <div className="a">
            <div className="aA">Price Details (rs/unit)</div>
            <span className="aB" />
          </div>
          <div className="b">
            <div className="bA">Purchase Price*</div>
            <input
              className="bB"
              value={product?.purchasePrice}
              onChange={(e) => (product.purchasePrice = e.target.value)}
              type="number"
              placeholder="0.00"
            />
          </div>
          <div className="b">
            <div className="bA">Selling Price*</div>
            <input
              className="bB"
              value={product?.sellingPrice}
              onChange={(e) => (product.sellingPrice = e.target.value)}
              type="number"
              placeholder="0.00"
            />
          </div>
          <div className="b">
            <div className="bA">MRP Price*</div>
            <input
              className="bB"
              value={product?.mrp}
              onChange={(e) => (product.mrp = e.target.value)}
              type="number"
              placeholder="0.00"
            />
          </div>
          <div className="b">
            <div className="bA">Stock*</div>
            <input
              className="bB"
              value={product?.stock}
              onChange={(e) => (product.stock = e.target.value)}
              type="number"
              placeholder="0.00"
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
                onClick={(e) => onDeleteProduct(e, this)}
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

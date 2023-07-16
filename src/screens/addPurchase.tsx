import { Component } from "react";
import HomeLayout from "../widgets/homeLayout";
import {
  getSingelPurchase,
  onAddPurchase,
  onDeletePurchase,
} from "../methods/addPurchase";
import { ProductInput } from "../widgets/input";
import { getSearchProduct } from "../methods/product";

export default class AddPurchaseScreen extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      purchase: { list: [{}] },
    };
  }
  componentDidMount(): void {
    if (this.props.data) {
      this.props.data.list = [];
      this.setState({ purchase: this.props.data });
      getSingelPurchase(this);
    }
  }

  _onClickBack = (e: any) => {
    e.preventDefault();
    this.props.setRoute("purchase");
  };

  render() {
    const { purchase, error }: any = this.state;
    const isEdit = purchase?.hasOwnProperty("_id");
    return (
      <div style={{ marginLeft: 60, height: "100vh" }}>
        <div className="myTop">
          <div className="a">Add Purchase</div>
        </div>
        <form className="myTableForm" onSubmit={(e) => onAddPurchase(e, this)}>
          <div className="a">
            <input
              className="aA"
              style={{ width: "30%" }}
              placeholder="Supplier Name"
              value={purchase.supplier}
              onChange={(e) => {
                purchase.supplier = e.target.value;
                this.setState({ purchase });
              }}
            />
            <input
              className="aA"
              style={{ width: 200 }}
              type="date"
              placeholder="Date"
              value={purchase.date}
              onChange={(e) => {
                purchase.date = e.target.value;
                this.setState({ purchase });
              }}
            />
            <input
              className="aA"
              style={{ width: "30%" }}
              placeholder="Note"
              value={purchase.note}
              onChange={(e) => {
                purchase.note = e.target.value;
                this.setState({ purchase });
              }}
            />
          </div>
          <div className="b">
            <div className="bA" style={{ width: 35 }} />
            <div className="bA" style={{ width: "5%" }}>
              No
            </div>
            <div className="bA" style={{ width: "50%" }}>
              Product
            </div>
            <div className="bA" style={{ width: "20%" }}>
              Qty
            </div>
            <div className="bA" style={{ width: "20%" }}>
              Total Price
            </div>
          </div>
          <div className="c">
            {purchase?.list?.map((it: any, k: number) => (
              <div className="cA" key={k}>
                <div
                  className="cAa"
                  style={{ width: 35 }}
                  onClick={() => {
                    if (purchase?.list?.length !== k + 1)
                      purchase?.list.splice(k, 1);
                    this.setState({ purchase });
                  }}
                >
                  X
                </div>
                <div className="cAb" style={{ width: "5%" }}>
                  {k + 1}
                </div>
                <ProductInput
                  onChange={async (v: any) => {
                    if (purchase?.list?.length === k + 1)
                      purchase?.list.push({});
                    await getSearchProduct(
                      v,
                      (res: any) => (it.searches = res)
                    );
                    this.setState({ purchase });
                  }}
                  onSelect={(value: any) => {
                    delete it.searches;
                    it.product = value._id;
                    this.setState({ purchase });
                  }}
                  datas={it.searches || []}
                  className="cAc"
                  style={{ width: "50%" }}
                  value={it?.productName || ""}
                />
                <input
                  className="cAc"
                  style={{ width: "20%" }}
                  type="number"
                  placeholder="0.00"
                  value={it.qty ?? ""}
                  onChange={(e) => {
                    it.qty = e.target.value;
                    this.setState({ purchase });
                  }}
                />
                <input
                  className="cAc"
                  style={{ width: "20%" }}
                  type="number"
                  placeholder="0.00"
                  value={it.totalPrice ?? ""}
                  onChange={(e) => {
                    it.totalPrice = e.target.value;
                    this.setState({ purchase });
                  }}
                />
              </div>
            ))}
          </div>
          <div className="d">
            <div className="errorMsg">{error}</div>
            <button className="dA btn2" onClick={this._onClickBack}>
              Back
            </button>
            {isEdit ? (
              <button
                className="dA btn3"
                onClick={(e) => onDeletePurchase(e, this)}
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

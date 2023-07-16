import { Component } from "react";
import HomeLayout from "../widgets/homeLayout";
import { getSingelSale, onAddSale, onDeleteSale } from "../methods/addSale";
import { ProductInput } from "../widgets/input";
import { getSearchProduct } from "../methods/product";

export default class AddSaleScreen extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      sale: {
        list: [{}],
      },
    };
  }
  componentDidMount(): void {
    if (this.props.data) {
      this.props.data.list = [];
      this.setState({ sale: this.props.data });
      getSingelSale(this);
    }
  }

  _onClickBack = (e: any) => {
    e.preventDefault();
    this.props.setRoute("sale");
  };

  render() {
    const { sale, error }: any = this.state;
    const isEdit = sale?.hasOwnProperty("_id");
    return (
      <div style={{ marginLeft: 60 }}>
        <div className="myTop">
          <div className="a">Add Sale</div>
        </div>
        <form className="myTableForm" onSubmit={(e) => onAddSale(e, this)}>
          <div className="a">
            <input
              className="aA"
              style={{ width: "30%" }}
              placeholder="Customer Name"
              value={sale.customer}
              onChange={(e) => {
                sale.customer = e.target.value;
                this.setState({ sale });
              }}
            />
            <input
              className="aA"
              style={{ width: 200 }}
              type="date"
              placeholder="Date"
              value={sale.date}
              onChange={(e) => {
                sale.date = e.target.value;
                this.setState({ sale });
              }}
            />
            <input
              className="aA"
              style={{ width: "30%" }}
              placeholder="Note"
              value={sale.note}
              onChange={(e) => {
                sale.note = e.target.value;
                this.setState({ sale });
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
            {sale?.list?.map((it: any, k: number) => (
              <div className="cA" key={k}>
                <div
                  className="cAa"
                  style={{ width: 35 }}
                  onClick={() => {
                    if (sale?.list?.length !== k + 1) sale?.list.splice(k, 1);
                    this.setState({ sale });
                  }}
                >
                  X
                </div>
                <div className="cAb" style={{ width: "5%" }}>
                  {k + 1}
                </div>
                <ProductInput
                  onChange={async (v: any) => {
                    if (sale?.list?.length === k + 1) sale?.list.push({});
                    await getSearchProduct(
                      v,
                      (res: any) => (it.searches = res)
                    );
                    this.setState({ sale });
                  }}
                  onSelect={(value: any) => {
                    delete it.searches;
                    it.product = value._id;
                    this.setState({ sale });
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
                    this.setState({ sale });
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
                    this.setState({ sale });
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
                onClick={(e) => onDeleteSale(e, this)}
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

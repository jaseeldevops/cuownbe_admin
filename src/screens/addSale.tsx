import { Component } from "react";
import HomeLayout from "../widgets/homeLayout";
import { getSingelSale, onAddSale, onDeleteSale } from "../methods/addSale";
import { ProductInput } from "../widgets/input";
import { getSearchProduct } from "../methods/product";
import { Sale, SaleEach } from "../modules/dataStructures";

export default class AddSaleScreen extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      sale: new Sale(),
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

  _CalculateTotal = () => {
    const { sale }: any = this.state;
    var total = 0;
    for (let i = 0; i < sale.list.length; i++)
      total +=
        ((Number(sale.list[i].cgst) + Number(sale.list[i].sgst)) / 100) *
          Number(sale.list[i].price) *
          Number(sale.list[i].qty) +
        Number(sale.list[i].price) * Number(sale.list[i].qty);
    return total;
  };

  _CalculateTotalTax = () => {
    const { sale }: any = this.state;
    var total = 0;
    for (let i = 0; i < sale.list.length; i++) {
      total +=
        ((Number(sale.list[i].cgst) + Number(sale.list[i].sgst)) / 100) *
        Number(sale.list[i].price) *
        Number(sale.list[i].qty);
    }
    return total;
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
            <div className="bA" style={{ width: "40%" }}>
              Product
            </div>
            <div className="bA" style={{ width: "10%" }}>
              Qty
            </div>
            <div className="bA" style={{ width: "10%" }}>
              Price
            </div>
            <div className="bA" style={{ width: "10%" }}>
              SGST
            </div>
            <div className="bA" style={{ width: "10%" }}>
              CGST
            </div>
            <div className="bA" style={{ width: "10%" }}>
              Total Tax
            </div>
            <div className="bA" style={{ width: "10%" }}>
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
                    await getSearchProduct(v, (r: any) => (it.searches = r));
                    this.setState({ sale });
                  }}
                  onSelect={(value: any) => {
                    if (sale?.list?.length === k + 1)
                      sale?.list.push(new SaleEach());
                    delete it.searches;
                    it.product = value._id;
                    it.price = value.sellingPrice / 100;
                    this.setState({ sale });
                  }}
                  datas={it.searches || []}
                  className="cAc"
                  style={{ width: "40%" }}
                  value={it?.productName || ""}
                />
                <input
                  className="cAc"
                  style={{ width: "10%" }}
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
                  style={{ width: "10%" }}
                  type="number"
                  placeholder="0.00"
                  value={it.price ?? ""}
                  onChange={(e) => {
                    it.price = e.target.value;
                    this.setState({ sale });
                  }}
                />
                <input
                  className="cAc"
                  style={{ width: "10%" }}
                  type="number"
                  placeholder="0.00"
                  value={it.sgst ?? ""}
                  onChange={(e) => {
                    it.sgst = e.target.value;
                    this.setState({ sale });
                  }}
                />
                <input
                  className="cAc"
                  style={{ width: "10%" }}
                  type="number"
                  placeholder="0.00"
                  value={it.cgst ?? ""}
                  onChange={(e) => {
                    it.cgst = e.target.value;
                    this.setState({ sale });
                  }}
                />
                <div className="cAb" style={{ width: "10%" }}>
                  {(
                    ((Number(it.cgst) + Number(it.sgst)) / 100) *
                    Number(it.price) *
                    Number(it.qty)
                  ).toFixed(2)}
                </div>
                <div className="cAb" style={{ width: "10%" }}>
                  {(
                    ((Number(it.cgst) + Number(it.sgst)) / 100) *
                      Number(it.price) *
                      Number(it.qty) +
                    Number(it.price) * Number(it.qty)
                  ).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="d">
            <div className="dA">
              Total Tax : {this._CalculateTotalTax().toFixed(2)}
            </div>
            <div className="dA">
              Total Price :{" "}
              {(this._CalculateTotal() - this._CalculateTotalTax()).toFixed(2)}
            </div>
            <div className="dA">
              Total : {this._CalculateTotal().toFixed(2)}
            </div>
          </div>
          <div className="f">
            <div className="errorMsg">{error}</div>
            <div className="fA btn2" onClick={this._onClickBack}>
              Back
            </div>
            {isEdit ? (
              <div className="fA btn3" onClick={(e) => onDeleteSale(e, this)}>
                Delete
              </div>
            ) : null}
            <button className="fA btn1" type="submit">
              {isEdit ? "Save & Print" : "Add & Print"}
            </button>
            <button className="fA btn1" type="submit">
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

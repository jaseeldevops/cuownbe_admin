import { Component } from "react";
import LoginScreen from "./screens/login";
import ProdectScreen from "./screens/prodect";
import AddProductScreen from "./screens/addProduct";
import PurchaseScreen from "./screens/purchase";
import SaleScreen from "./screens/sale";
import AddPurchaseScreen from "./screens/addPurchase";
import AddSaleScreen from "./screens/addSale";
import DashboardScreen from "./screens/dashboard";
import StaffScreen from "./screens/staff";
import AddStaffScreen from "./screens/addStaff";

export default class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      route: "addSale",
      routeData: null,
    };
  }

  _setRoute = (v: any, d?: any) => {
    this.setState({ route: v, routeData: d || null });
  };
  render() {
    const { route, routeData }: any = this.state;
    // return <LoginScreen setRoute={setRoute} />;
    if (route === "login")
      return <LoginScreen data={routeData} setRoute={this._setRoute} />;
    if (route === "dashboard")
      return <DashboardScreen data={routeData} setRoute={this._setRoute} />;
    if (route === "product")
      return <ProdectScreen data={routeData} setRoute={this._setRoute} />;
    if (route === "addProduct")
      return <AddProductScreen data={routeData} setRoute={this._setRoute} />;
    if (route === "purchase")
      return <PurchaseScreen data={routeData} setRoute={this._setRoute} />;
    if (route === "addPurchase")
      return <AddPurchaseScreen data={routeData} setRoute={this._setRoute} />;
    if (route === "sale")
      return <SaleScreen data={routeData} setRoute={this._setRoute} />;
    if (route === "addSale")
      return <AddSaleScreen data={routeData} setRoute={this._setRoute} />;
    if (route === "staff")
      return <StaffScreen data={routeData} setRoute={this._setRoute} />;
    if (route === "addStaff")
      return <AddStaffScreen data={routeData} setRoute={this._setRoute} />;
  }
}

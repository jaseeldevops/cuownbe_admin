import { httpGet } from "../modules/serviceInit";

export const getAllPurchases = (app: any) => {
  httpGet("purchases")
    .then((res) => {
      app.setState({ allPurchases: res.data });
    })
    .catch(() => {});
};

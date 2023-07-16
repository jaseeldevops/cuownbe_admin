
import { httpGet } from "../modules/serviceInit";

export const getAllSales = (app: any) => {
  httpGet("sales")
    .then((res) => {
      app.setState({ allSales: res.data });
    })
    .catch(() => {});
};

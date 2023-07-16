import { httpGet } from "../modules/serviceInit";

export const getAllDashboardData = (app: any) => {
  httpGet("dashboard")
    .then((res) => {
      app.setState({ allData: res.data });
    })
    .catch(() => {});
};

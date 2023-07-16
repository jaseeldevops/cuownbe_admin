import { checkAndSetServiceToken, httpGet } from "../modules/serviceInit";

export const getAllDashboardData = (app: any) => {
  checkAndSetServiceToken(app.props.setRoute);
  httpGet("dashboard")
    .then((res) => {
      app.setState({ allData: res.data });
    })
    .catch(() => {});
};

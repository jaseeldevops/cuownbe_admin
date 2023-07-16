
import { httpGet } from "../modules/serviceInit";

export const getAllStaffs = (app: any) => {
  httpGet("staffs")
    .then((res) => {
      app.setState({ allStaffs: res.data });
    })
    .catch(() => {});
};

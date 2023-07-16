import { SaleEach } from "../modules/dataStructures";
import { httpDelete, httpGet, httpPost, httpPut } from "../modules/serviceInit";

export const onAddSale = (e: any, app: any) => {
  e.preventDefault();
  const body = JSON.parse(JSON.stringify(app?.state?.sale));
  body.list.pop();

  var response;
  if (body?.hasOwnProperty("_id")) response = httpPut("sale", body);
  else response = httpPost("sale", body);

  response
    .then(() => app.props.setRoute("sale"))
    .catch((e) => app.setState({ error: e.response.data?.msg }));
};

export const onDeleteSale = (e: any, app: any) => {
  e.preventDefault();
  httpDelete("sale/" + app.state.sale._id)
    .then(() => {
      app.props.setRoute("sale");
    })
    .catch((e) => {});
};

export const getSingelSale = (app: any) => {
  httpGet("sale/" + app.props.data._id)
    .then((res) => {
      res.data?.list.push(new SaleEach());
      app.setState({ sale: res.data });
    })
    .catch((e) => {});
};

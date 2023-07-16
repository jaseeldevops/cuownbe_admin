import { httpDelete, httpGet, httpPost, httpPut } from "../modules/serviceInit";

export const onAddPurchase = (e: any, app: any) => {
  e.preventDefault();
  const body = JSON.parse(JSON.stringify(app?.state?.purchase));
  body.list.pop();

  var response;
  if (body?.hasOwnProperty("_id")) response = httpPut("purchase", body);
  else response = httpPost("purchase", body);

  response
    .then(() => app.props.setRoute("purchase"))
    .catch((e) => app.setState({ error: e.response.data?.msg }));
};

export const onDeletePurchase = (e: any, app: any) => {
  e.preventDefault();
  httpDelete("purchase/" + app.state.purchase._id)
    .then(() => app.props.setRoute("purchase"))
    .catch((e) => app.setState({ error: e.response.data?.msg }));
};

export const getSingelPurchase = (app: any) => {
  httpGet("purchase/" + app.props.data._id)
    .then((res) => {
      res.data?.list.push({});
      app.setState({ purchase: res.data });
    })
    .catch((e) => app.setState({ error: e.response.data?.msg }));
};

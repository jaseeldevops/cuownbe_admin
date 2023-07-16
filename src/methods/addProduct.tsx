import { httpDelete, httpPost, httpPut } from "../modules/serviceInit";

export const onAddProduct = (e: any, app: any) => {
  e.preventDefault();
  const body = app.state.product;
  var response;
  if (body?.hasOwnProperty("_id")) response = httpPut("product", body);
  else response = httpPost("product", body);

  response
    .then(() => {
      app.props.setRoute("product");
    })
    .catch((e) => {
      app.setState({ error: e.response.data?.msg });
    });
};

export const onDeleteProduct = (e: any, app: any) => {
  e.preventDefault();
  httpDelete("product/" + app.state.product._id)
    .then(() => {
      app.props.setRoute("product");
    })
    .catch((e) => {
      console.log(e);
    });
};

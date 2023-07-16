import { Product } from "../modules/dataStructures";
import { httpDelete, httpGet, httpPost, httpPut } from "../modules/serviceInit";

export const onAddProduct = async (e: any, app: any) => {
  e.preventDefault();
  const { product, loading }: any = app.state;

  const body = JSON.parse(JSON.stringify(product));
  body.mrp *= 100;
  body.purchasePrice *= 100;
  body.sellingPrice *= 100;

  if (body.name === "") {
    app.setState({ error: "Enter prodect name" });
    return;
  }
  if (body.category === "") {
    app.setState({ error: "Select category" });
    return;
  }
  if (body.unit === "") {
    app.setState({ error: "Select prodect unit" });
    return;
  }

  if (loading) return;
  var response: any;
  app.setState({ loading: true, erro: null });
  if (body?.hasOwnProperty("_id")) response = httpPut("product", body);
  else response = httpPost("product", body);
  response
    .then(() => app.props.setRoute("product"))
    .catch((e: any) => app.setState({ error: e.response.data?.msg }));
  app.setState({ loading: false });
};

export const onDeleteProduct = async (e: any, app: any) => {
  e.preventDefault();
  const { product, loading }: any = app.state;
  if (loading) return;
  app.setState({ loading: true });
  await httpDelete("product/" + product._id)
    .then(() => app.props.setRoute("product"))
    .catch((e: any) => app.setState({ error: e.response.data?.msg }));
  app.setState({ loading: false });
};

export const getAllSettings = (app: any) => {
  httpGet("units").then((res) => app.setState({ allUnits: res.data }));
  httpGet("categories").then((res) =>
    app.setState({ allCategories: res.data })
  );
};

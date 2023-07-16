import { httpGet } from "../modules/serviceInit";

export const getAllProducts = (app: any) => {
  httpGet("products")
    .then((res) => {
      app.setState({ allProducts: res.data });
    })
    .catch(() => {});
};

export const getSearchProducts = (e: any, app: any) => {
  if (e.target.value.length === 0) getAllProducts(app);
  if (e.target.value.length < 3) return;
  httpGet("products/" + e.target.value)
    .then((res) => {
      if (e.target.value.length === 0) getAllProducts(app);
      app.setState({ allProducts: res.data });
    })
    .catch(() => {});
};

export const getSearchProduct = async (value: any, setValues: any) => {
  if (value === "") {
    setValues([]);
    return;
  }
  await httpGet("products/" + value)
    .then((res) => setValues(res.data))
    .catch((e) => {});
};

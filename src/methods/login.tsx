import { httpPost, setServiceToken } from "../modules/serviceInit";

export const onClickLogin = (e: any, app: any) => {
  e.preventDefault();
  const body = {
    org: e.target.org.value,
    user: e.target.user.value,
    password: e.target.password.value,
  };
  httpPost("login", body)
    .then((res) => {
      setServiceToken(res.data);
      app.props.setRoute("dashboard");
    })
    .catch(() => {});
};

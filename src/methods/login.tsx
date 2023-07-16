import { httpPost, setServiceToken } from "../modules/serviceInit";

export const onClickLogin = async (e: any, app: any) => {
  e.preventDefault();
  const { loading }: any = app.state;
  const body = {
    org: e.target.org.value,
    user: e.target.user.value,
    password: e.target.password.value,
  };
  if (loading) return;
  app.setState({ loading: true, erro: null });
  await httpPost("login", body)
    .then((res) => {
      setServiceToken(res.data);
      app.props.setRoute("dashboard");
    })
    .catch((e: any) => app.setState({ error: e.response.data?.msg }));
  app.setState({ loading: false });
};

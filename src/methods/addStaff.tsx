import { httpDelete, httpPost, httpPut } from "../modules/serviceInit";

export const onAddStaff = (e: any, app: any) => {
  e.preventDefault();
  const { staff, loading }: any = app.state;

  if (staff.name === "") {
    app.setState({ error: "Enter Name" });
    return;
  }
  if (staff.user === "") {
    app.setState({ error: "Enter User Name" });
    return;
  }
  if (staff.user.split(" ").length > 1) {
    app.setState({ error: "White spaces are not allowed in username" });
    return;
  }
  if (staff.phone === "") {
    app.setState({ error: "Enter Phone Numbet" });
    return;
  }
  if (staff.password === "") {
    app.setState({ error: "Enter Password" });
    return;
  }
  if (staff.password.length < 6) {
    app.setState({ error: "Atleast six charecter in password" });
    return;
  }

  if (loading) return;
  var response: any;
  app.setState({ loading: true, erro: null });
  if (staff?.hasOwnProperty("_id")) response = httpPut("staff", staff);
  else response = httpPost("staff", staff);
  response
    .then(() => app.props.setRoute("staff"))
    .catch((e: any) => app.setState({ error: e.response.data?.msg }));
  app.setState({ loading: false });
};

export const onDeleteStaff = (e: any, app: any) => {
  e.preventDefault();
  httpDelete("staff/" + app.state.staff._id)
    .then(() => app.props.setRoute("staff"))
    .catch((e) => {});
};

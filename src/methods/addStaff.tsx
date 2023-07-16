import { httpDelete, httpPost, httpPut } from "../modules/serviceInit";

export const onAddStaff = (e: any, app: any) => {
  e.preventDefault();
  const body = app.state.staff;
  var response;
  if (body?.hasOwnProperty("_id")) response = httpPut("staff", body);
  else response = httpPost("staff", body);

  response
    .then(() => {
      app.props.setRoute("staff");
    })
    .catch((e) => {
      app.setState({ error: e.response.data?.msg });
    });
};

export const onDeleteStaff = (e: any, app: any) => {
  e.preventDefault();
  httpDelete("staff/" + app.state.staff._id)
    .then(() => {
      app.props.setRoute("staff");
    })
    .catch((e) => {
      console.log(e);
    });
};

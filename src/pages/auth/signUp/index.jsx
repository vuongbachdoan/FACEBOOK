import { Button, ButtonToolbar, Form, Schema } from "rsuite";
import "bootstrap/dist/css/bootstrap.css";

const { StringType } = Schema.Types;
const model = Schema.Model({
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("Please enter an email address."),
  password: StringType().isRequired("Please enter a password."),
  name: StringType().isRequired("Please enter a username."),
  confirmPassword: StringType()
    .addRule((value, data) => {
      if (value !== data.password) {
        return false;
      }
      return true;
    }, "Password incorrect.")
    .isRequired("Please confirm password."),
});

export const SignUp = () => {
  const handleSubmit = (submitValue) => {
    console.log(submitValue);
  };

  return (
    <Form
      model={model}
      onSubmit={handleSubmit}
      className="row col-md-4 col-sm-4 p-2 col-6 d-flex justify-content-center border shadow rounded"
    >
      <h3 className="text-center col-md-12 col-sm-12 col-12">Sign Up </h3>
      <div className="col-md-6 col-sm-12 col-12 container">
        <Form.Group controlId="name">
          <Form.ControlLabel>User Name</Form.ControlLabel>
          <Form.Control
            className="form-control shadow w-100"
            type="text"
            name="name"
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control
            className="form-control shadow w-100"
            name="email"
            type="email"
          />
          <Form.HelpText>Email is required</Form.HelpText>
        </Form.Group>
      </div>
      <div className="col-md-6 col-sm-12 col-12">
        <Form.Group controlId="password">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control
            className="form-control shadow w-100"
            name="password"
            type="password"
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.ControlLabel>Confirm Password</Form.ControlLabel>
          <Form.Control
            className="form-control shadow w-100"
            name="confirmPassword"
            type="password"
            autoComplete="off"
          />
          <Form.HelpText>Please confirm your password.</Form.HelpText>
        </Form.Group>
      </div>
      <div className="col-12 m-2">
        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary" type="submit">
              Submit
            </Button>
            <Button appearance="default">Sign in</Button>
          </ButtonToolbar>
        </Form.Group>
      </div>
    </Form>
  );
};

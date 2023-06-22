import { Form, Button, Schema, ButtonToolbar, Panel } from "rsuite";
import FormGroup from "rsuite/esm/FormGroup";
import FacebookOfficialIcon from "@rsuite/icons/legacy/FacebookOfficial";
import GooglePlusCircleIcon from "@rsuite/icons/legacy/GooglePlusCircle";
import "bootstrap/dist/css/bootstrap.css";
const { StringType } = Schema.Types;
const model = Schema.Model({
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("Please enter an email address."),
  password: StringType().isRequired("Please enter a password."),
});

export const SignIn = () => {
  const handleSubmit = (formValue) => {
    console.log(formValue);
  };

  return (
    <>
      <Panel
        header={<h3>Sign in</h3>}
        bordered
        className="my-panel col-6 shadow row"
      >
        <Form
          model={model}
          onSubmit={handleSubmit}
          className="m-2 p-1 col-12 row"
        >
          <div className="col-md-8 col-sm-12 row d-flex flex-column flex-md-row">
            <div className="col-md-6 col-sm-12 m-0">
              <FormGroup controlId="email" className="col-12">
                <Form.ControlLabel>Email</Form.ControlLabel>
                <Form.Control name="email" type="Email" className="p-2 w-100" />
              </FormGroup>
              <FormGroup controlId="password" className="col-12">
                <Form.ControlLabel>Password</Form.ControlLabel>
                <Form.Control
                  name="password"
                  type="Password"
                  className="p-2 w-100"
                />
              </FormGroup>
            </div>
            <FormGroup className="col-md-5 col-sm-12">
              <ButtonToolbar className="m-1 d-grid gap-3">
                <div className="m-1"></div>
                <Button
                  appearance="primary"
                  active
                  type="submit"
                  className="my-button btn p-3 shadow"
                >
                  Sign in
                </Button>
                <Button
                  appearance="default"
                  className="my-button btn p-2 shadow"
                >
                  Sign up
                </Button>
              </ButtonToolbar>
            </FormGroup>
          </div>
          <div className="col-md-4 col-sm-12">
            <Panel
              className="container shadow"
              header="Sign in with: "
              bordered
            >
              <ButtonToolbar className="row">
                <Button
                  color="blue"
                  appearance="primary"
                  startIcon={<FacebookOfficialIcon />}
                  className="my-button p-2"
                >
                  Facebook
                </Button>
                <Button
                  color="red"
                  appearance="primary"
                  startIcon={<GooglePlusCircleIcon />}
                  className="my-button p-2"
                >
                  Google Plus
                </Button>
              </ButtonToolbar>
            </Panel>
          </div>
        </Form>
        <div className="m-2 col-md-12 col-sm-12">
          <ButtonToolbar>
            <Button appearance="link">Forgot password?</Button>
          </ButtonToolbar>
        </div>
      </Panel>
    </>
  );
};

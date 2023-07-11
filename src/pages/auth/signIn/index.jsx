import { Form, Button, Schema, ButtonToolbar, Panel, PanelGroup } from "rsuite";
import FormGroup from "rsuite/esm/FormGroup";
import FacebookOfficialIcon from "@rsuite/icons/legacy/FacebookOfficial";
import GooglePlusCircleIcon from "@rsuite/icons/legacy/GooglePlusCircle";
import { NavLink } from "react-router-dom";

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
        className="my-panel col-3 shadow row"
      >
        <Form
          model={model}
          onSubmit={handleSubmit}
          className="m-2 p-1 col-12 row"
        >
          <div className="col-md-12 row d-flex flex-column flex-md-row">
            <Panel header="Sign in with: " bordered>
              <PanelGroup className="w-100">
                <Button
                  color="blue"
                  appearance="primary"
                  startIcon={<FacebookOfficialIcon />}
                >
                  Facebook
                </Button>
                <label>-Or-</label>
                <Button
                  color="red"
                  appearance="primary"
                  startIcon={<GooglePlusCircleIcon />}
                >
                  Google Plus
                </Button>
              </PanelGroup>
            </Panel>
            <FormGroup controlId="email" className="col-12">
              <Form.ControlLabel htmlFor="email">Email</Form.ControlLabel>
              <Form.Control id="email" name="email" type="Email" className="" />
            </FormGroup>
            <FormGroup controlId="password" className="col-12 w-100">
              <Form.ControlLabel htmlFor="password">Password</Form.ControlLabel>
              <Form.Control id="password" name="password" type="Password" />
            </FormGroup>
            <FormGroup className="col-12">
              <ButtonToolbar className="m-1 d-grid gap-3">
                <div className="m-1"></div>
                <Button
                  appearance="primary"
                  active
                  type="submit"
                  className="my-button btn shadow"
                >
                  Sign in
                </Button>
                <NavLink
                  to="/sign-up"
                  className="my-button btn shadow text-decoration-none"
                >
                  Sign up
                </NavLink>
              </ButtonToolbar>
            </FormGroup>
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

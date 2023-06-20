import { Button, ButtonToolbar, Form } from "rsuite";

export const SignUp = () => {
    return (
        <Form>
            <h3 className="text-center">Sign Up ✨</h3>
            <Form.Group controlId="name">
                <Form.ControlLabel>Username</Form.ControlLabel>
                <Form.Control name="name" />
                <Form.HelpText>Username is required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="email">
                <Form.ControlLabel>Email</Form.ControlLabel>
                <Form.Control name="email" type="email" />
                <Form.HelpText tooltip>Email is required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.ControlLabel>Password</Form.ControlLabel>
                <Form.Control name="password" type="password" autoComplete="off" />
            </Form.Group>
            <Form.Group>
                <ButtonToolbar>
                    <Button appearance="primary">Ok</Button>
                    <Button appearance="default">Cancel</Button>
                </ButtonToolbar>
            </Form.Group>
        </Form>
    );
}
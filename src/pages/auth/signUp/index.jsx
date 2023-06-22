import { Button, ButtonToolbar, Form, Nav, Sidenav } from "rsuite";
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

export const SignUp = () => {
    return (
        <div className="d-flex w-100 min-vh-100">
            <div style={{ width: 240 }} className="">
                <Sidenav defaultOpenKeys={['3', '4']}>
                    <Sidenav.Body>
                        <Nav activeKey="1">
                            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                                Setting phone number
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<GroupIcon />}>
                                Verify phone number
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<GroupIcon />}>
                                Config password
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<GroupIcon />}>
                                Add detail information
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<GroupIcon />}>
                                Review and create account
                            </Nav.Item>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </div>
            <div className="d-flex justify-content-center align-items-center w-100 min-vh-100">
                <Form className="flex-1">
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
            </div>
        </div>
    );
}
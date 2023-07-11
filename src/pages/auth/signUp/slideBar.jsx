import React from "react";
import { Container, Nav, Sidebar, Sidenav, Timeline } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import { NavLink } from "react-router-dom";

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: "#34c3ff",
  color: "#fff",
  whiteSpace: "nowrap",
  overflow: "hidden",
};
const itemStyles = {
  paddingTop: 0,
  paddingBottom: 0,
};

const SlideBarSignUp = ({ keyActive }) => {
  return (
    <div className="h-100">
      <Container className="">
        <Sidebar
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}
          collapsible
          className="shadow p-3 "
        >
          <Sidenav.Header>
            <div style={headerStyles}>
              <span style={{ marginLeft: 12 }}>STEP SETTING</span>
            </div>
          </Sidenav.Header>
          <Sidenav defaultOpenKeys={["3"]} appearance="subtle">
            <Timeline>
              <Sidenav.Body>
                <Nav activeKey={keyActive}>
                  <Nav.Item
                    eventKey={1}
                    className="text-decoration-none"
                    style={itemStyles}
                    icon={<DashboardIcon />}
                  >
                    <Timeline.Item>
                      <p>Setting phone number</p>
                    </Timeline.Item>
                  </Nav.Item>
                  <Nav.Item
                    eventKey={2}
                    className="text-decoration-none"
                    style={itemStyles}
                    icon={<GroupIcon />}
                  >
                    <Timeline.Item>
                      <p>Verify phone number</p>
                    </Timeline.Item>
                  </Nav.Item>
                  <Nav.Item
                    eventKey={3}
                    className="text-decoration-none"
                    style={itemStyles}
                    icon={<GroupIcon />}
                  >
                    <Timeline.Item>
                      <p>Config password</p>
                    </Timeline.Item>
                  </Nav.Item>
                  <Nav.Item
                    eventKey={4}
                    className="text-decoration-none"
                    style={itemStyles}
                    icon={<GroupIcon />}
                  >
                    <Timeline.Item>
                      <p>Add detail information</p>
                    </Timeline.Item>
                  </Nav.Item>
                  <Nav.Item
                    eventKey={5}
                    className="text-decoration-none"
                    style={itemStyles}
                    icon={<GroupIcon />}
                  >
                    <Timeline.Item>
                      <p>Review and create account</p>
                    </Timeline.Item>
                  </Nav.Item>
                  <Nav.Item
                    eventKey={6}
                    style={itemStyles}
                    icon={<GroupIcon />}
                    className="text-decoration-none"
                  >
                    <Timeline.Item>
                      <NavLink
                        to="/sign-in"
                        className="text-decoration-none active"
                      >
                        Log in
                      </NavLink>
                    </Timeline.Item>
                  </Nav.Item>
                </Nav>
              </Sidenav.Body>
            </Timeline>
          </Sidenav>
        </Sidebar>
      </Container>
    </div>
  );
};

export default SlideBarSignUp;

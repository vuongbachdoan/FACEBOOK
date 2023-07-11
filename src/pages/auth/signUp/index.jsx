import { Button, ButtonGroup, Form, Schema } from "rsuite";

import React, { useState } from "react";
import SlideBarSignUp from "./slideBar";
import {
  modelDetailInformation,
  modelPassword,
  modelPhoneNumber,
} from "./modelSignUp";

const { StringType } = Schema.Types;

export const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});

  const handleSetFormValues = (formValues) => {
    setFormValues((prevFormValues) => {
      return { ...prevFormValues, ...formValues };
    });
  };

  const handleFormSubmit = (submitValue) => {
    if (submitValue) {
      setStep((prevStep) => {
        if (prevStep < 5) {
          return prevStep + 1;
        } else {
          return prevStep;
        }
      });
    }
  };

  const handleFormPrev = () => {
    setStep((prevStep) => {
      if (prevStep > 1) {
        return prevStep - 1;
      } else {
        return prevStep;
      }
    });
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <Form
            model={modelPhoneNumber}
            onSubmit={(formValue) => handleFormSubmit(formValue)}
            onChange={(newFormValue) => handleSetFormValues(newFormValue)}
            className="row col-md-4 col-sm-4 p-2 col-6 d-flex justify-content-center border rounded row"
          >
            <h3 className="text-center">Setting Phone Number</h3>
            <Form.Group controlId="phoneNumber" className="col-12 row">
              <Form.ControlLabel>Phone Number</Form.ControlLabel>
              <Form.Control
                className="form-control w-100"
                type="text"
                name="phoneNumber"
              />
            </Form.Group>
            <ButtonGroup>
              <Button
                color="red"
                appearance="primary"
                type="button"
                onClick={handleFormPrev}
              >
                Prev Step
              </Button>
              <Button color="cyan" appearance="primary" type="submit">
                Next Step
              </Button>
            </ButtonGroup>
          </Form>
        );
      case 2:
        return (
          <Form
            model={Schema.Model({
              verificationCode: StringType().isRequired(
                "Please enter a this field."
              ),
            })}
            onSubmit={(formValue) => handleFormSubmit(formValue)}
            onChange={(newFormValue) => handleSetFormValues(newFormValue)}
            className="row col-md-4 col-sm-4 p-2 col-6 d-flex justify-content-center border rounded row"
          >
            <h3 className="text-center">Verify Phone Number</h3>
            <Form.Group controlId="verificationCode" className="col-12 row">
              <Form.ControlLabel>Verification Code</Form.ControlLabel>
              <Form.Control
                className="form-control w-100"
                type="text"
                name="verificationCode"
              />
            </Form.Group>
            <ButtonGroup>
              <Button
                color="red"
                appearance="primary"
                type="button"
                onClick={handleFormPrev}
              >
                Prev Step
              </Button>
              <Button color="cyan" appearance="primary" type="submit">
                Next Step
              </Button>
            </ButtonGroup>
          </Form>
        );
      case 3:
        return (
          <Form
            model={modelPassword}
            onSubmit={(formValue) => handleFormSubmit(formValue)}
            onChange={(newFormValue) => handleSetFormValues(newFormValue)}
            className="row col-md-4 col-sm-4 p-2 col-6 d-flex justify-content-center border rounded row"
          >
            <h3 className="text-center">Configure Password</h3>
            <Form.Group controlId="password" className="col-12 row">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control
                className="form-control w-100"
                name="password"
                type="password"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword" className="col-12 row">
              <Form.ControlLabel>Confirm Password</Form.ControlLabel>
              <Form.Control
                className="form-control w-100"
                name="confirmPassword"
                type="password"
                autoComplete="off"
              />
            </Form.Group>
            <ButtonGroup>
              <Button
                color="red"
                appearance="primary"
                type="button"
                onClick={handleFormPrev}
              >
                Prev Step
              </Button>
              <Button color="cyan" appearance="primary" type="submit">
                Next Step
              </Button>
            </ButtonGroup>
          </Form>
        );
      case 4:
        return (
          <Form
            model={modelDetailInformation}
            onSubmit={(formValue) => handleFormSubmit(formValue)}
            onChange={(newFormValue) => handleSetFormValues(newFormValue)}
            className="row col-md-4 col-sm-4 p-2 col-6 d-flex justify-content-center border rounded row"
          >
            <h3 className="text-center">Add Detail Information</h3>
            <Form.Group controlId="details" className="col-12 row">
              <Form.Group controlId="firstName" className="col-12 row">
                <Form.ControlLabel>First Name</Form.ControlLabel>
                <Form.Control
                  className="form-control w-100"
                  type="text"
                  name="firstName"
                />
              </Form.Group>
              <Form.Group controlId="lastName" className="col-12 row">
                <Form.ControlLabel>Last Name</Form.ControlLabel>
                <Form.Control
                  className="form-control w-100"
                  type="text"
                  name="lastName"
                />
              </Form.Group>
              <Form.Group controlId="DOB" className="col-12 row">
                <Form.ControlLabel>Day of birthday</Form.ControlLabel>
                <Form.Control
                  className="form-control w-100"
                  type="date"
                  name="DOB"
                />
              </Form.Group>
              <Form.Group controlId="address" className="col-12 row">
                <Form.ControlLabel>Address</Form.ControlLabel>
                <Form.Control
                  className="form-control w-100"
                  type="text"
                  name="address"
                />
              </Form.Group>
            </Form.Group>
            <ButtonGroup>
              <Button
                color="red"
                appearance="primary"
                type="button"
                onClick={handleFormPrev}
              >
                Prev Step
              </Button>
              <Button color="cyan" appearance="primary" type="submit">
                Next Step
              </Button>
            </ButtonGroup>
          </Form>
        );
      case 5:
        return (
          <Form className="row col-md-4 col-sm-4 p-2 col-6 d-flex justify-content-center border rounded row">
            <h3 className="text-center">Review and Create Account</h3>
            <Form.Group controlId="reviewNumberPhone" className="col-12 row">
              <Form.ControlLabel>Phone Number:</Form.ControlLabel>
              <Form.Control
                className="w-100"
                disabled
                value={formValues.phoneNumber}
              />
            </Form.Group>
            <Form.Group controlId="reviewPassword" className="col-12 row">
              <Form.ControlLabel>Password:</Form.ControlLabel>
              <Form.Control
                className="w-100"
                disabled
                value={formValues.password}
              />
            </Form.Group>
            <Form.Group controlId="reviewFirstName" className="col-12 row">
              <Form.ControlLabel>First Name:</Form.ControlLabel>
              <Form.Control
                className="w-100"
                disabled
                value={formValues.firstName}
              />
            </Form.Group>
            <Form.Group controlId="reviewLastName" className="col-12 row">
              <Form.ControlLabel>Last Name:</Form.ControlLabel>
              <Form.Control
                className="w-100"
                disabled
                value={formValues.lastName}
              />
            </Form.Group>
            <Form.Group controlId="reviewDOB" className="col-12 row">
              <Form.ControlLabel>Day of Birthday:</Form.ControlLabel>
              <Form.Control className="w-100" disabled value={formValues.DOB} />
            </Form.Group>
            <Form.Group controlId="reviewAddress" className="col-12 row">
              <Form.ControlLabel>Address:</Form.ControlLabel>
              <Form.Control
                className="w-100"
                disabled
                value={formValues.address}
              />
            </Form.Group>
            <ButtonGroup className="col-12">
              <Button
                color="red"
                appearance="primary"
                type="button"
                onClick={handleFormPrev}
              >
                Prev Step
              </Button>
              <Button color="cyan" appearance="primary" type="submit">
                Create
              </Button>
            </ButtonGroup>
          </Form>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="d-flex w-100 min-vh-100">
        <SlideBarSignUp keyActive={step} />
        <div className="d-flex justify-content-center align-items-center w-100 min-vh-100">
          {renderForm()}
        </div>
      </div>
    </>
  );
};

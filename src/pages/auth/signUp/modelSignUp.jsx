import { Schema } from "rsuite";

export const { StringType } = Schema.Types;
const modelEmail = Schema.Model({
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("Please enter an email address."),
});

export const modelDetailInformation = Schema.Model({
  firstName: StringType().isRequired("Please enter your first name."),
  lastName: StringType().isRequired("Please enter your last name."),
  DOB: StringType()
    .isRequired("Please enter your day of birthday.")
    .addRule((value) => {
      const currentDate = new Date();
      const selectedDate = new Date(value);
      if (selectedDate > currentDate) {
        return false;
      }
      return true;
    }, "Date of birth cannot be in the future."),
  address: StringType().isRequired("Please enter your address."),
});

export const modelPhoneNumber = Schema.Model({
  phoneNumber: StringType()
    .addRule((value) => {
      const phoneNumberRegex = /^0[0-9]{9}$/;
      return phoneNumberRegex.test(value);
    }, "Please enter a valid phone number.")
    .isRequired("Please enter a phone number."),
});

export const modelPassword = Schema.Model({
  password: StringType().isRequired("Please enter a password."),
  confirmPassword: StringType()
    .addRule((value, data) => {
      if (value !== data.password) {
        return false;
      }
      return true;
    }, "Password incorrect.")
    .isRequired("Please confirm password."),
});

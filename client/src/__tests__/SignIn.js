import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { SignInForm } from "../components/SignIn";
import { Formik } from "formik";

describe("SignIn", () => {
  it("calls onSubmit with the form values", async () => {
    const onSubmit = jest.fn();
    const initialValues = {
      username: "",
      password: "",
    };
    const { getByTestId } = render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    );

    fireEvent.changeText(getByTestId("usernameField"), "kalle");
    fireEvent.changeText(getByTestId("passwordField"), "password");
    fireEvent.press(getByTestId("submitButton"));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: "kalle",
        password: "password",
      });
    });
  });
});

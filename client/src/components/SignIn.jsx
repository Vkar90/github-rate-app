import { Button, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import  useSignIn  from '../hooks/useSignIn';
import * as yup from 'yup';
import { useNavigate } from "react-router-native";

export const SignInForm = ({ onSubmit }) => {
  return (
    <View style={{backgroundColor: "white"}}>
      <View style={{margin: 15}}>
          <FormikTextInput name="username" placeholder="Username" testID="usernameField" />
          <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} testID="passwordField" />
          <Button title="Sign in" onPress={onSubmit} style={{margin:10, padding:10}} testID="submitButton" />
      </View>
    </View>
  )
}

const validationSchema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password} = values;

    try {
      await signIn({username, password})
      navigate.push("/")
    } catch(e){
      console.log(e)
    }
  };

  const initialValues = {
    username: "",
    password: ""
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>{({ handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}</Formik>
  )
};

export default SignIn;
import { useEffect } from "react";
import { useNavigate } from "react-router-native";
import AuthStorageContext from "../contexts/AuthStorageContext";
import { useContext } from "react";
import { useApolloClient} from "@apollo/client";

const SignOut = () => {
    const authStorage = useContext(AuthStorageContext)
    const navigate = useNavigate();
    const apolloClient = useApolloClient();

    const logout = async () => {
        await authStorage.removeAccessToken()
        await apolloClient.resetStore()
        navigate('/')
    }

    useEffect(() => {
        logout()
    }, [])

    return (<></>)
}

export default SignOut;
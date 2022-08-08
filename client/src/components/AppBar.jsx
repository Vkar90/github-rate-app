import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import { useQuery } from "@apollo/client";
import { GET_AUTHORIZEDUSER } from '../graphql/queries';

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      height: 100,
      backgroundColor: theme.colors.appBar,
      alignItems: "center"
    },
    scrollView: {
        flexDirection: "row",
        backgroundColor: theme.colors.appBar,
    },
});

const AppBar = () => {
    const { data } = useQuery(GET_AUTHORIZEDUSER);
    const loggedIn = data && data.authorizedUser;
  return (
    <View>
        <ScrollView horizontal style={styles.scrollView}>
            <View style={styles.container}>
                <AppBarTab text="Repositories" url="/" show="true"/>
                <AppBarTab text="Create Review" url="/createreview" show={loggedIn}/>
                <AppBarTab text="My Reviews" url="/reviews" show={loggedIn}/>
                <AppBarTab text="Sign in" url="/signin" show={!loggedIn}/>
                <AppBarTab text="Sign up" url="/signup" show={!loggedIn}/>
                <AppBarTab text="Sign out" url="/signout" show={loggedIn}/>
            </View>
        </ScrollView>
    </View>
);
};

export default AppBar;
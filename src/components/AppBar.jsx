import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      height: 80,
      backgroundColor: theme.colors.appBar,
      alignItems: "center"
    },
    scrollView: {
        flexDirection: "row",
        backgroundColor: theme.colors.appBar,
    },
});

const AppBar = () => {
  return (
    <View>
        <ScrollView horizontal style={styles.scrollView}>
            <View style={styles.container}>
                <AppBarTab text="Repositories" url="/"/>
                <AppBarTab text="Sign in" url="/signin" />
            </View>
        </ScrollView>
    </View>
);
};

export default AppBar;
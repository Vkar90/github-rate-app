import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
    tab: {
        flexGrow: 0,
        paddingLeft: 15,
    }
});

const AppBarTab = ({text, url}) => {
    return(
        <Link to={url}>
            <Text fontWeight="bold" color="white" fontSize="subheading" style={styles.tab}>
                {text}
            </Text>
        </Link>
    );
};

export default AppBarTab;
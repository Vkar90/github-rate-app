import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';
import { FlatList, View, StyleSheet } from 'react-native';
import useRepository from '../hooks/useRepository';
import theme from '../theme';

const styles = StyleSheet.create ({
    separator: {
        height:10,
    },
    container: {
        display: "flex",
        flexDirection: "row",
        height:100
    },
    containerStats: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: 50
    },
    tab:{
        flexGrow: 0,
      color: "white",
      justifyContent: "space-around",
      paddingTop: 5,
      paddingLeft: 15
    },
    tabStats: {
        flexGrow: 1,
        color: "white",
        justifyContent: "space-around",
        paddingTop: 5,
        paddingLeft: 15 
    },
    ratingContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: theme.colors.primary,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    languageLogo: {
        height: 30,
        backgroundColor: theme.colors.primary,
        flexShrink: 1,
        padding: 5,
        borderRadius: 10
    }
  });

  const ItemSeparator = () => <View style={styles.separator} />

  const RepositoryView = () => {
    const { id } = useParams();
    const { repositories }  = useRepository(id);

    if (repositories === undefined){return(<></>);}

    repositories.singleView = true;

    return (
        <FlatList
            data={repositories.review.edges}
            renderItem={({ item }) => <RepositoryItem review={item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ItemSeparator}
         />
    );
  };

  export default RepositoryView;
import Text from "./Text";
import { StyleSheet, View, Image } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        height: 100,
    },
    containerStats: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: 50
      },
    tab: {
        flexGrow: 0,
        color: "white",
        justifyContent: "space-around",
        paddingTop: 5,
        paddingLeft: 15,
    },
    tabStats: {
        flexGrow: 1,
        color: "white",
        justifyContent: "space-around",
        paddingTop: 5,
        paddingLeft: 15 
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    languageLogo: {
        height: 30,
        backgroundColor: theme.colors.primary,
        flexShrink: 1,
        padding: 5,
        borderRadius: 5,
        overflow: "hidden"
    }
});

const formatNumber = (num) => {
    if (num >= 1000) {
        return (`${Math.round(num / 1000 * 10) / 10}k`);
    }else{
        return num;
    }
}

const StatsTab = ({text, number}) => (
    <View style = {styles.tabStats}>
        <Text fontWeight="bold">{formatNumber(number)}</Text>
        <Text>{text}</Text>
    </View>
)

const RepositoryItem = ({ repository }) => {
    return (
        <View style = {{ backgroundColor: "white" }}>
            <View style={styles.container}>
                <View style={styles.tab}>
                    <Image source={{ uri: repository.ownerAvatarUrl }} 
                    style={styles.tinyLogo} />
                </View>
                <View style={styles.tab}>
                    <Text fontWeight="bold">{repository.fullName}</Text>
                    <Text style={{maxWidth: 250, marginBottom: 1}}>{repository.description}</Text>
                    <View style={{display: "flex", flexDirection: "row"}}>
                        <Text color="white" fontWeight="bold" 
                            style={styles.languageLogo}>{repository.language}
                        </Text>
                    </View> 
                </View> 
            </View>
            <View style = {styles.containerStats}>   
                <StatsTab text = "Stars" number = {repository.stargazersCount}/>
                <StatsTab text = "Forks" number = {repository.forksCount}/>
                <StatsTab text = "Reviews" number = {repository.reviewCount}/>
                <StatsTab text = "Rating" number = {repository.ratingAverage}/>
            </View>
        </View>
    );
};

export default RepositoryItem;
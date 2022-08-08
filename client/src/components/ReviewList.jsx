import useUser from "../hooks/useUser";
import { FlatList, View, StyleSheet, Button, Alert } from "react-native";
import { useNavigate } from "react-router-native";
import useDeleteReview from '../hooks/useDeleteReview';
import ReviewItem from "./ReviewItem";


const styles = StyleSheet.create ({
    separator: {
        height: 10,
    }
});

const ItemSeparator = () => <View style={styles.separator} />

const ReviewList = () => {
    const navigate = useNavigate();
    const { authorizedUser, fetchMore } = useUser( );
  
    if (authorizedUser === undefined){return(<></>);}
  
    const onEndReach = () => {
      fetchMore();
    };
  
    const ReviewItemActions = ({ review }) => {
      const [deleteReview] = useDeleteReview();
  
      const createTwoButtonAlert = () =>
      Alert.alert(
        "Delete review",
        "Are you sure you want to delete this review?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => deleteReview(review.node.id) }
        ],
        { cancelable: false }
      );

        return (
            <>  
            <ReviewItem review={review} />
            <Button onPress={() => navigate(`/repo/${review.node.repository.id}`)} title="View repository" />
            <Button onPress={createTwoButtonAlert} title="Delete review" />
            </>
        )
        }

        return (
            <FlatList
             data={authorizedUser.review.edges}
             renderItem = {({item}) => <ReviewItemActions review={item} />}
             keyExtractor = {item => item.id}
             ItemSeparatorComponent = {ItemSeparator}
             onEndReached={onEndReach}
             onEndReachedThreshold={0.5}
             />
        );
    };

    export default ReviewList;
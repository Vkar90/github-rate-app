import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignOut from './SignOut';
import RepositoryView from './RepositoryView';
import CreateReview from './CreateReview';
import SignUp from './SignUp';
import ReviewList from './ReviewList';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/createreview" element={<CreateReview />} exact />
        <Route path="/reviews" element={<ReviewList />} exact />
        <Route path="/signout" element={<SignOut />} exact />
        <Route path="/repo/:id" element={<RepositoryView />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
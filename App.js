import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
import { Header } from './src/components/common';
import { Provider } from 'react-redux';
import { fetchPost } from './src/actions/post';
import postReducer from './src/reducers/postReducer';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  post: postReducer
});

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(rootReducer)}>
        <View style={{flex: 1}}>
          <Header headerText={"React Native Redux Fetch Example"} />
          <Main />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
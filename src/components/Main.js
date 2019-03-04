import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';

class Main extends Component {

  state = {
    post: []
  }

  fetchPostButtonClicked = () => {
    console.log(this.props.fetch());    
  }

  render() {
    return (
      <View style={styles.main}>
        <Card>
          <CardSection>
            <Button onPress={this.fetchPostButtonClicked}>Fetch Post</Button>
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Text>Loading - 200?</Text>
          </CardSection>
          <CardSection>
            <Text>
              "some json"
            </Text>
          </CardSection>
        </Card>
      </View>
    )
  }
} 

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    height: 500,
  }
});

const mapStateToProps = state => {
  return {
    post: state.post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => {
      dispatch(fetchPost())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
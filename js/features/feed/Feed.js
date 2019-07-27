import React, { Component } from "react";
import { SafeAreaView, StyleSheet, FlatList, AsyncStorage } from "react-native";
import { Post } from "./Post";
import { connect } from 'react-redux';

class Feed extends Component {

  onLike = async (postId) => {
    this.props.like(postId);

    // Enviar o like pro servidor

    const token = await AsyncStorage.getItem('token');

    await fetch(
      `https://instalura-api.herokuapp.com/api/fotos/${postId}/like`, {
      method: 'POST',
      headers: new Headers({'X-AUTH-TOKEN': token})
    });
  }

  navegaParaPost = () => {
    this.props.navigation.navigate('Post');
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem('token');
    const resposta = await fetch(
      "https://instalura-api.herokuapp.com/api/fotos",
      {
        headers: new Headers({'X-AUTH-TOKEN': token})
      }
    );
    const json = await resposta.json();

    this.props.addPosts(json);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.posts}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Post post={item} onLikeClick={this.onLike} navegaParaPost={this.navegaParaPost} />}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPosts: (json) => {
      dispatch({
        type: 'ADD_POSTS',
        posts: json
      })
    },
    like: (postId) => {
      dispatch({
        type: 'LIKE',
        postId
      })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Feed);









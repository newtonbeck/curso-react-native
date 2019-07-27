import Feed from "./js/features/feed/Feed";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from "react-navigation";
import { AreaDeslogado } from "./js/modules/AreaDeslogado";
import { createStore } from 'redux';

/*
{
  type: 'ADD_POSTS',
  posts: [{}, {}, {}]
}
{
  type: 'LIKE',
  postId: 1
}
*/
const reducer = (state = [], action) => {
  console.log(action);

  if (action.type === 'ADD_POSTS') {
    return action.posts;
  }
  if (action.type === 'LIKE') {
    const post = state.find((post) => post.id === action.postId);

    const postLikeado = {
      ...post,
      likeada: !post.likeada,
    };

    return state.map((post) => {
      return post.id !== action.postId ? post : postLikeado;
    });
  }
  return state;
}

export const store = createStore(reducer);

const AreaLogado = createStackNavigator({
  Home: { screen: Feed },
  Post: { screen: Feed }
});

const AppNavigation = createSwitchNavigator(
  {
    Logado: AreaLogado,
    Deslogado: AreaDeslogado
  },
  { initialRouteName: "Deslogado" }
);

export default createAppContainer(AppNavigation);

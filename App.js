import React, { Component } from "react";
import Feed from "./js/features/feed/Feed";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";
import { View, Text, Button } from "react-native";
import { AreaDeslogado } from "./js/modules/AreaDeslogado";

const PaginaInternaScreen = props => {
  return (
    <View>
      <Text>estamos na página inicial</Text>
    </View>
  );
};

// 1 - npm install react-navigation
// 2 - Customiza o App.js para ficar assim
// 3 - Cria o HomeScreen e o PaginaInternaScreen
const HomeScreen = props => {
  return (
    <View>
      <Text>estamos na página inicial</Text>
      <Button
        title="Ir para pagina interna"
        onPress={() => {
          props.navigation.navigate("PaginaInterna");
        }}
      />
    </View>
  );
};

const AreaLogado = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  PaginaInterna: { screen: PaginaInternaScreen }
});

const AppNavigation = createSwitchNavigator(
  {
    Logado: AreaLogado,
    Deslogado: AreaDeslogado
  },
  { initialRouteName: "Deslogado" }
);

export default createAppContainer(AppNavigation);

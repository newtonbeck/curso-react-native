import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage
} from "react-native";
import { InstaTextInput } from "../../components/InstaTextInput";
// import { InstaButton } from "../../components/InstaButton";

// 1 - Converte o LoginScreen para classe
// 2 - Cria o atributo state: state = { login: "" };
// 3 - Altera o InstaTextInput: onChangeText, value
export class LoginScreen extends React.Component {
  state = {
    values: {
      login: 'rafael',
      senha: '123456'
    },
    errors: {}
  };

  handleChangeText = nomeDoCampo => {
    return textoAtualDoCampo => {
      // Quebra em uma função e organiza melhor dps
      let error = {};
      if (!textoAtualDoCampo) {
        error = { type: "required", message: "Vc deve preencher este campo" };
      }

      this.setState({
        values: { ...this.state.values, [nomeDoCampo]: textoAtualDoCampo },
        errors: { ...this.state.errors, [nomeDoCampo]: error }
      });
    };
  };

  fazLogin = async () => {
    // Mostrar um ActivityIndicator
    const resposta = await fetch(
      'https://instalura-api.herokuapp.com/api/public/login', 
    {
      method: 'POST',
      body: JSON.stringify({
        login: this.state.values.login,
        senha: this.state.values.senha
      }),
      headers: new Headers({'Content-type': 'application/json'})
    });
    // Não mostrar um ActivityIndicator

    if (resposta.ok) {
      const token = await resposta.text();
      AsyncStorage.setItem('token', token);
      this.props.navigation.navigate('Logado')
    } else {
      this.setState({
        errors: {
          login: 'O usuário ou senha estão errados'
        }
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Instaelum</Text>
        <Text>{JSON.stringify(this.state.errors)}</Text>
        <InstaTextInput
          label="Login"
          value={this.state.values.login}
          onChangeText={this.handleChangeText("login")}
        />
        <Text>
          {this.state.errors["login"] && this.state.errors["login"].message}
        </Text>

        {/*  */}
        <Text>{this.state.values.senha}</Text>
        <InstaTextInput
          label="Senha"
          value={this.state.values.senha}
          onChangeText={this.handleChangeText("senha")}
        />

        <Button
          title="Logar"
          onPress={this.fazLogin}
        />
        {/* <Button style={{ backgroundColor: "red" }} title="Logar" /> */}
      </View>
    );
  }
}

LoginScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Dashboard",
    header: null
  };
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 30
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

/*
  [x] Centraliza as bagaça toda 
  [x] TextInput: text 
  [x] TextInput: password 
  [ ] Fazer o lance do textbox subir 
  [ ] Button: Login 
  [ ] Button/Link: Esqueci minha senha 

  [ ] Extras 
  [ ] Icones nos componentes 
  [ ] Clica no olhinho para mostrar o password 
*/

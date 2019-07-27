import React, { Component } from "react";
import { SafeAreaView, View, StyleSheet, FlatList, TextInput, Picker } from "react-native";

const Produto = ({ produto, onUnidadeChange }) => (
  <View>
    <TextInput value={produto.valor} />
    <Picker 
      selectedValue={produto.unidade}
      onValueChange={(itemValue, itemIndex) =>
        onUnidadeChange(produto.id, itemValue)
      }>
      <Picker.Item label="Litros" value="Litros" />
      <Picker.Item label="Km" value="Km" />
    </Picker>
  </View>
)

// Esse é o container
export default class Felipe extends Component {

  constructor() {
    super();
    this.state = {
      produtos: [
        {
          id: 1,
          valor: '10',
          unidade: 'Litros'
        },
        {
          id: 2,
          valor: '5',
          unidade: 'Km'
        },
        {
          id: 3,
          valor: '100',
          unidade: 'Litros'
        }
      ]
    };
  }

  onUnidadeChange = (idDoProduto, novaUnidade) => {
    const produto = this.state.produtos
      .find((produto) => produto.id === idDoProduto);

    const produtoAtualizado = {
      ...produto,
      unidade: novaUnidade
    };

    const novosProdutos = this.state.produtos.map(p => {
      if (p.id !== idDoProduto) {
        return p;
      } else {
        return produtoAtualizado
      }
    });

    this.setState({ produtos: novosProdutos });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.produtos}
          renderItem={({item}) => (
            <Produto produto={item} onUnidadeChange={this.onUnidadeChange} />
          )} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';

export default class CriadordeMemes extends Component {
  constructor(props) {
    super(props);
    this.state = {texto1: ''};

    this.escrever = this.escrever.bind(this);
  }
  escrever(t) {
    let s = this.state;
    s.texto1 = t;
    this.setState(s);
  }
  render() {
    return (
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo}>Criar Memes</Text>
        </View>

        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Digite o texto do seu mame"
            onChangeText={this.escrever}
          />
        </View>

        <View style={styles.area}>
          <Text style={[styles.texto, styles.texto1]}>
            {this.state.texto1.toUpperCase()}
          </Text>
          <Image style={styles.img} source={require('../images/madruga.jpg')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#999999',
    padding: 30,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  inputArea: {
    alignSelf: 'stretch',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#EEEEEE',
    height: 40,
    margin: 20,
    padding: 10,
  },
  area: {
    width: 300,
    height: 300,
    marginTop: 10,
  },
  img: {
    width: 300,
    height: 300,
    marginTop: -70,
    zIndex: 0,
  },
  texto: {
    fontSize: 20,
    color: '#FFFFFF',
    padding: 10,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 70,
  },
  texto1: {
    zIndex: 1,
  },
});

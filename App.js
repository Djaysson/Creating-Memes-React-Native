import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';


export default class CriadordeMemes extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View>
          <Text style={style.titulo}>Criar Memes</Text>
        </View>

        <View style={style.inputArea}>
          <TextInput style={style.input} placeholder="Digite o texto seu mame" />
        </View>

        <View style={style.area}>
          <Text style={[style.texto, style.texto1]}></Text>
          <Image style={style.img} source={require('./images/madruga.jpg')} />
          <Text style={[style.texto, style.texto2]}></Text>
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
    alignItems: 'center'
  },
  titulo: {
    fontSize: 30,
    color: '#FFFFFF'
  },
  inputArea: {
    alignSelf: 'stretch'
  },
  input: {
    borderWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#EEEEEE',
    height: 40,
    margin: 20,
    padding: 10
  },
  area: {
    width: 300,
    height: 300,
    marginTop: 10
  },
  img: {
    width: 300,
    height: 300,
  }


});
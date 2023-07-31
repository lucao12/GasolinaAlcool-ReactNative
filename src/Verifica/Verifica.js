import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class Verifica extends Component{

  render(){
    let gasosa = parseFloat(this.props.gasosa);
    let alcool = parseFloat(this.props.alcool);
    let valor = parseFloat(this.props.valor);
    return (
      <View 
      style={styles.container}>

        <View style={styles.imageLogo}>
          
          <Image
          source={require('../img/gas.png')}/>

          <Text
          style={styles.textoLogo}>

            Compensa usar {(valor.toFixed(2) <= 0.7 ? 'Álcool' : 'Gasolina')}

          </Text>

        </View>

        <Text
        style={styles.textoNegrito}>

            Com os preços:

        </Text>

        <View
        style={styles.viewTexto}>


            <Text
            style={styles.textoPreco}>

                Álcool: R$ { (alcool.toFixed(2)).toString() }

            </Text>

            <Text
            style={styles.textoPreco}>

                Gasolina: R$ { (gasosa.toFixed(2)).toString() }

            </Text>

        </View>

        <TouchableOpacity
        style={styles.btn}
        onPress={this.props.fechar}>

            <Text
            style={styles.btnTexto}>

                Calcular novamente

            </Text>

        </TouchableOpacity>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  imageLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  textoLogo: {
    color: '#2dd151',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20,
  },
  viewTexto: {
    paddingLeft: '28%',
    justifyContent: 'center',
    margin: 15,
  },
  textoNegrito: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 20,
  },
  textoPreco: {
    fontSize: 17,
    color: '#FFF',
    margin: 2,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
  },
  btnTexto: {
    color: '#ef4130',
    fontSize: 14,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#ef4130',
    padding: 5,
    width: '60%',
    borderRadius: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  // Responsividade para dispositivos com proporção 16:9
  '@media (max-width: 480px) and (max-height: 853px)': {
    imageLogo: {
      marginTop: 50,
    },
    textoLogo: {
      fontSize: 18,
      marginTop: 10,
    },
    textoNegrito: {
      fontSize: 18,
      marginTop: 10,
    },
    textoPreco: {
      fontSize: 14,
    },
    btnTexto: {
      fontSize: 12,
      width: '80%',
    },
  },
  // Responsividade para dispositivos com proporção 18:9
  '@media (max-width: 360px) and (max-height: 720px)': {
    imageLogo: {
      marginTop: 30,
    },
    textoLogo: {
      fontSize: 16,
      marginTop: 5,
    },
    textoNegrito: {
      fontSize: 16,
      marginTop: 5,
    },
    textoPreco: {
      fontSize: 13,
    },
    btnTexto: {
      fontSize: 11,
      width: '85%',
    },
  },
  // Adicione mais media queries conforme necessário para outras proporções de tela
});


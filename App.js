import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image, TextInput } from 'react-native';
import Verifica from './src/Verifica/Verifica';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      inputG: '',
      gasolina: 0,
      inputA: '',
      alcool: 0,
      modalVisible: false
    }
    this.gravaNumeros = this.gravaNumeros.bind(this);
    this.sair = this.sair.bind(this);
  }

  

  gravaNumeros(){
    if(this.state.inputA === '' || this.state.inputG === ''){
      alert('Insira os dados!');
      return;
    }
    
    this.setState({
    gasolina: this.state.inputG,
    alcool: this.state.inputA,
    modalVisible: true
    });
  }

  sair(visible){
    this.setState({
      modalVisible: visible
    });
  }

  render(){
    return (
      <View 
      style={styles.container}>

        <View style={styles.imageLogo}>
          
          <Image
          source={require('./src/img/logo.png')}/>

          <Text
          style={styles.textoLogo}>
            Qual a melhor opção?
          </Text>

        </View>

        <View
        style={styles.viewInput}>

          <Text
          style={styles.textoInput}>
            Álcool (preço por litro):
          </Text>

          <TextInput
          style={styles.inputs}
          value={this.state.inputA}
          underlineColorAndroid='transparent'
          onChangeText={(textoA) => this.setState({inputA: textoA})}
          keyboardType='numeric'/>

          <Text
          style={[styles.textoInput, styles.Padding]}>
            Gasolina (preço por litro):
          </Text>

          <TextInput
          style={styles.inputs}
          value={this.state.inputG}
          underlineColorAndroid='transparent'
          onChangeText={(textoG) => this.setState({inputG: textoG})}
          keyboardType='numeric'/>

        </View>

        <TouchableOpacity
        style={styles.btn}
        onPress={this.gravaNumeros}>

          <Text
          style={styles.btnTexto}>
            Calcular
          </Text>

        </TouchableOpacity>

        <Modal
        animationType='slide'
        visible={this.state.modalVisible}>

          <Verifica 
          fechar={() => this.sair(false)} 
          gasosa={this.state.gasolina} 
          alcool={this.state.alcool} 
          valor={(parseFloat(this.state.alcool) / parseFloat(this.state.gasolina))}/>

        </Modal>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121'
  },
  imageLogo:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
  textoLogo:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20
  },
  viewInput:{
    padding: 20,
    marginTop: 35
  },
  textoInput:{
    textAlign: 'left',
    fontSize: 18,
    color: '#FFF',
    fontWeight: '600',
    textAlign: 'left',
  },
  inputs:{
    backgroundColor: '#FFF',
    color: '#000',
    fontSize: 20,
    marginTop: 10,
    height: 45,
    borderRadius: 4,
    paddingLeft: 20
  },
  Padding:{
    paddingTop: 20
  },
  btn:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTexto:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#ef4130',
    padding: 10,
    width: '90%',
    borderRadius: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 10
  }
});

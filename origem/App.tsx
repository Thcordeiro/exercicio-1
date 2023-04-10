import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import Simples from "./componentes/Simples";
import Frag from "./componentes/Frag";
import ParImpar from "./componentes/ParImpar";

import Familia from "./componentes/relacao/Familia";
import Membro from "./componentes/relacao/Membro";

import UsuarioLogado from "./componentes/UsuarioLogado";

export default class App extends Component{
  render() {
    return (
      <View style={estilos.container}>
        {/*<Simples texto='Thiago />
         <Frag titulo="Cadastro" 
              subTitulo="Teda de Cadastro de Produto" /> 
         <ParImpar numero={9}  /> 8 
        <Familia>
            <Membro nome="Ana" sobreNome="Silva"/>
            <Membro nome="José" sobreNome="Silva"/> 
        </Familia> */}
        <UsuarioLogado usuario={ {nome:'teste', email:'teste@teste.com'} } /> 
        <UsuarioLogado usuario={ {nome:'teste 2'} } />
        <UsuarioLogado usuario={ {email:'teste@teste.com'} } />        
        <UsuarioLogado usuario={ {} } />
        <UsuarioLogado usuario={ null } />
      </View>
    );      
  }
}
  
  const estilos = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    fonte: {
      fontSize: 50,
    },
  });

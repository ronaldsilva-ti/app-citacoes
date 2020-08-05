import React, { useState } from 'react';
import {  StyleSheet, View, Text, FlatList, } from 'react-native';

import Citacoes from './components/Citacoes';
import Formulario from './components/Formulario';




export default function App(){

  const [ citacoes, setCitacoes ] = useState([
    {id: '1', paciente:'Dog 1', proprietario: 'Carlos', sintomas: 'Não come'},
    {id: '2', paciente:'Cat 1', proprietario: 'João', sintomas: 'Patinha quebrada'},
    {id: '3', paciente:'Cat 1', proprietario: 'João', sintomas: 'Patinha quebrada'},

  ])


   function eliminarPaciente(id){
     setCitacoes((citacoesAtuais) => {
       return citacoesAtuais.filter(citacao => citacao.id !== id)
     })
   } 

  return (
    <View style={styles.conteudo}>
      <Text style={styles.titulo}>Administrador de Pacientes</Text>   
      <Formulario />
      <Text style={styles.subtitulo}>{citacoes.length <= 0 ? 'Não há citações' : 'Administrar'}</Text>   

      

      <FlatList
          data={citacoes}          
          renderItem={ ({ item }) => <Citacoes item={ item } eliminarPaciente={eliminarPaciente} /> }
          keyExtractor={ citacoes => citacoes.id }      
      />
    </View>
  );
};

const styles = StyleSheet.create({
    conteudo:{
      backgroundColor: '#AA076B',
      flex: 1
    },
    titulo:{
      color: '#fff',
      marginTop: 40,
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: "uppercase"
    },
    subtitulo: {
      color: '#fff',
      marginTop: 40,
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10  
    }   
});



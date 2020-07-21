import React, { useState } from 'react';
import {  StyleSheet, View, Text, FlatList} from 'react-native';

import Citacoes from './components/Citacoes';



const App = () => {

  const [ citacoes, setCitacoes ] = useState([
    {id: '1', paciente:'Ronald', proprietario: 'Cosme', sintomas: 'Não come'},
    {id: '2', paciente:'Paulo', proprietario: 'João', sintomas: 'Gripe'},
    {id: '3', paciente:'Carlos', proprietario: 'Lucas', sintomas: 'Não dorme'},
  ])

  return (
    <View style={styles.conteudo}>
      <Text style={styles.titulo}>Administrador de Citações</Text>   

      <FlatList
          data={citacoes}          
          renderItem={ ({ item }) => <Citacoes item={ item } /> }
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
      textAlign: 'center' 
    }
});

export default App;

import React, { useState } from 'react';
import {  StyleSheet, View, Text, FlatList, ScrollView, TouchableHighlight, Platform } from 'react-native';

import Citacoes from './components/Citacoes';
import Formulario from './components/Formulario';




export default function App(){

  const [ citacoes, setCitacoes ] = useState([
    {id: '1', paciente:'Dog 1', proprietario: 'Carlos', sintomas: 'Não come'},
    {id: '2', paciente:'Cat 1', proprietario: 'João', sintomas: 'Patinha quebrada'},
    {id: '3', paciente:'Cat 1', proprietario: 'João', sintomas: 'Patinha quebrada'},

    ])
  const [mostraForm, setMostraForm] = useState(false)

  function  mostrarForm(){
    setMostraForm(!mostraForm)

  }

   function eliminarPaciente(id){
     setCitacoes((citacoesAtuais) => {
       return citacoesAtuais.filter(citacao => citacao.id !== id)
     })
   } 

  return (
    <ScrollView style={styles.conteudo}>
      <Text style={styles.titulo}>Administrador de Pacientes</Text> 
      
      {/* Melhor do que button quando criar app para IOS */}
      <TouchableHighlight onPress={() => mostrarForm()} style={styles.buttonMostra}> 
          <Text style={styles.textCitacao}>{mostraForm ? 'Cancelar' : 'Criar nova Citação'}</Text>
      </TouchableHighlight>

      <View style={styles.conteudoScroll}>
        {
          mostraForm && (<Formulario citacoes={citacoes} setCitacoes={setCitacoes} setMostraForm={setMostraForm} />)
        }
        <Text style={styles.subtitulo}>{citacoes.length <= 0 ? 'Não há citações' : 'Administrar'}</Text>   

        

        <FlatList
            style={styles.listado}
            data={citacoes}          
            renderItem={ ({ item }) => <Citacoes item={ item } eliminarPaciente={eliminarPaciente} /> }
            keyExtractor={ citacoes => citacoes.id }      
        />
        </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    conteudo:{
      backgroundColor: '#AA076B',
      flex: 1
    },
    titulo:{
      color: '#fff',
      marginTop: Platform.OS === 'ios' ? 50 : 40,
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
    },
    conteudoScroll:{
      flex: 1,
      marginHorizontal: '2.5%'
    },
    listado:{
      flex: 1,
    },
    buttonMostra:{
      padding: 10,
      backgroundColor: '#2196F3',
      marginVertical: 10
    },
    textCitacao:{
      color:'white',
      fontWeight:'bold',
      textAlign: 'center',
      textTransform: 'uppercase'
    }

});
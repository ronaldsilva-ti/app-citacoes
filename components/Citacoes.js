import React, { useState } from 'react';
import {  StyleSheet, View, Text, FlatList, Button } from 'react-native';

export default function Citacoes({item, eliminarPaciente}){

    function dialogoEliminar(id){
        console.log('Eliminando..', id)    
        eliminarPaciente(id)
    }


    return(    
        <View style={styles.citacoes}>
            <View>
                <Text style={styles.label}>Paciente: </Text>
                <Text style={styles.texto}>{item.paciente}</Text>
            </View>

            <View>
                <Text style={styles.label}>Proprietario: </Text>
                <Text style={styles.texto}>{item.proprietario}</Text>
            </View>

            <View>
                <Text style={styles.label}>Sintomas: </Text>
                <Text style={styles.texto}>{item.sintomas}</Text>
            </View>

            <Button onPress={() => dialogoEliminar(item.id)} color="red" style={styles.btnEliminar} title="Eliminar &times;" />
        </View>
    )
}

const styles =  StyleSheet.create({
    citacoes: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    label:{
        fontWeight: 'bold',
        fontSize: 18,
        marginTop:20
    },
    texto: {
        fontSize: 18,
    }
   
})
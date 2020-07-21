import React, { useState } from 'react';
import {  StyleSheet, View, Text, FlatList } from 'react-native';

export default function Citacoes({item}){
    return(
        <View style={styles.citacoes}>
            <View>
                <Text>Paciente: </Text>
                <Text>{item.paciente}</Text>
            </View>

            <View>
                <Text>Proprietario: </Text>
                <Text>{item.proprietario}</Text>
            </View>

            <View>
                <Text>Sintomas: </Text>
                <Text>{item.sintomas}</Text>
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    citacoes: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10


    }
})
import React, { useState } from 'react';
import {  StyleSheet, View, Text, TextInput, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Formulario(){

    const [data, guardaData] = useState('');
    const [hora, guardahora] = useState('');



    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmaData = (date) => {
        const opcao = { year: 'numeric', month: 'long', day: '2-digit' }
        guardaData(date.toLocaleDateString('pt-BR', opcao))
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    //Mostra ou oculta Datatime Picker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmaHora = (hora) => {
        console.log(hora);
        const opcao = { hour: 'numeric',minute: '2-digit',hour12: false }
        guardahora(hora.toLocaleTimeString('pt-BR', opcao))
        hideTimePicker();
    };

    return(
       <View style={styles.formulario}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <TextInput
                    style={styles.input}  
                    onChangeText={(text) => console.log(text) }          
                />
            </View>

            <View>
                <Text style={styles.label}>Dono:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => console.log(text) }            
                />
            </View>

            <View>
                <Text style={styles.label}>Telefone:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric' 
                    onChangeText={(text) => console.log(text) }    
                />
            </View>
            <View style={styles.view}>
                <Text style={styles.labelDate}>{data}</Text>
                    <Button title="Selecionar Data" onPress={showDatePicker} />
                    
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmaData}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                    />                
            </View>

            <View style={styles.view}>
                <Text style={styles.labelDate}>{hora}</Text>
                    <Button title="Selecionar Hora" onPress={showTimePicker} />

                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmaHora}
                        onCancel={hideTimePicker}
                        locale='pt_BR'
                        is24Hour
                    />
                
            </View>

            <View>
                <Text style={styles.label}>Sintomas:</Text>
                <TextInput
                    multiline
                    style={styles.input}   
                    onChangeText={(text) => console.log(text) }         
                />
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    formulario:{
        backgroundColor: '#FFF',
        paddingHorizontal:20,
        paddingVertical: 10,
        marginHorizontal: '2.5%'
    },  
    label:{
        fontWeight: 'bold',
        fontSize: 18,
        marginTop:20
    },
    input:{
        marginTop:10,
        height:50,
        borderColor:'black',
        borderWidth:1,
        borderStyle: 'solid'
    },
    view:{
        marginTop: 5
    },
    labelDate:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop:20,
        textTransform: 'uppercase'
    }
})
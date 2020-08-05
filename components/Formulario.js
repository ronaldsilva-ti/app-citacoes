import React, { useState } from 'react';
import {  StyleSheet, View, Text, TextInput, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Formulario(){
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmaData = (date) => {
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

    const confirmaHora = (time) => {
        console.warn("A date has been picked: ", date);
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
                <Button title="Selecionar Data" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={confirmaData}
                    onCancel={hideDatePicker}
                />
            </View>

            <View style={styles.view}>
                <Button title="Selecionar Hora" onPress={showTimePicker} />
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={confirmaHora}
                    onCancel={hideTimePicker}
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
    }
})
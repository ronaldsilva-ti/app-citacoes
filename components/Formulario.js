import React, { useState } from 'react';
import {  StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AwesomeAlert from 'react-native-awesome-alerts';


export default function Formulario(){
    const [ paciente, guardaPaciente ] = useState('');
    const [ dono, guardaDono ] = useState('');
    const [ telefone, guardaTelefone ] = useState('');
    const [ data, guardaData ] = useState('');
    const [ hora, guardahora ] = useState('');
    const [ sintomas, guardaSintomas ] = useState('');

    const [mostraAlert, setMostraAlert] = useState(false);



    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);


    //Mostra ou oculta Alert

    function showAlert(){
        setMostraAlert(true)
    }

    function hideAlert(){
        setMostraAlert(false)
    }

     //Mostra ou oculta Data Picke
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmaData = (date) => {
        const opcao = { year: 'numeric', month: 'long', day: '2-digit' }
        guardaData(date.toLocaleDateString('pt-BR', opcao))
        hideDatePicker();
    };

    //Mostra ou oculta Time Picker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmaHora = (hora) => {
        const opcao = { hour: 'numeric',minute: '2-digit',hour12: false }
        guardahora(hora.toLocaleTimeString('pt-BR', opcao))
        hideTimePicker();
    };

    function criarNovo(){

        if(paciente.trim() === ''
          ||dono.trim() === '' 
          ||sintomas.trim() === ''
          ||telefone.trim() === ''
          ||data.trim() === ''
          ||hora.trim() === ''){  
              
            showAlert()
            return;

            // mostrarAlerta()
            // return;
          }

    }

    function mostrarAlerta(){
        // Alert.alert(
        //     'Erro', //Titulo
        //     'Todos os campos são obrigátorios',//mensagem
        //     [{
        //         text: 'OK'
        //     }]
        // )      
     
    }

    return(
       <View style={styles.formulario}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <TextInput
                    style={styles.input}  
                    onChangeText={(text) => guardaPaciente(text) }          
                />
            </View>

            <View>
                <Text style={styles.label}>Dono:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => guardaDono(text) }            
                />
            </View>

            <View>
                <Text style={styles.label}>Telefone:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric' 
                    onChangeText={(text) => guardaTelefone(text) }    
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
                    onChangeText={(text) => guardaSintomas(text) }         
                />
            </View>

            <View style={styles.btnSubmit}>
                 <Button  onPress={() => criarNovo()} title="Salvar" />
            </View>

            {
                mostraAlert && (
                    <AwesomeAlert
                    show={showAlert}
                    title="Erro"
                    message="Todos os campos são obrigatorios"          
                    showCancelButton={false}
                    showConfirmButton={true}                   
                    confirmText="OK"
                    confirmButtonColor="#2196F3"
                    onCancelPressed={() => {
                      hideAlert();
                    }}
                    onConfirmPressed={() => {
                      hideAlert();
                    }}
                  />
                )
            }

        

       </View>
    )
}
const styles = StyleSheet.create({
    formulario:{
        backgroundColor: '#FFF',
        paddingHorizontal:10,
        paddingVertical: 10,
        marginHorizontal: '2.5%'
    },  
    label:{
        fontWeight: 'bold',
        fontSize: 12,
        marginTop:10
    },
    input:{
        marginTop:10,
        height:40,
        borderColor:'black',
        borderWidth:1,
        borderStyle: 'solid'
    },
    view:{
        marginTop: 1
    },
    labelDate:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
        marginTop:20,
        textTransform: 'uppercase'
    },
    btnSubmit:{
        marginTop: 15
    }
})
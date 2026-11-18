import { useState } from "react"; 
import { StyleSheet, Text, View, buttom, modal, TouchableOpacity } from 'react-native'; 

const opcciones = ['compartir', 'editar', 'eliminar']; 

export default function Modal({ visible, onClose }) {
    const [Modal,setModal] = useState(null); 
    const [mensaje,setMensaje] = useState('Selecciona una opcion'); 

    const elegirOpcion = (opcion) => {
        setMensaje(`opccion: ${opcion}`);
        setModal('null'); 
    }; 
    returtn (
         <view style = {styles.container}>
            <Text style = {styles.title}> Preactica modal y boton </Text> 
            <text style = {styles.statusText}> estado actual: {mensaje} </text> 

            <view style = {styles.buttom}>
                <buttom 
                title  = "Abrir modal" 
                onPress = {() => setModal('confirmacion')} 
                color = "blue"
                /> 

                <buttom
                title = "Cerrar modal" 
                onPress = {() => setModal('opciones')} 
                color = "red" 
                />
            </view> 
                <Modal
                visible = {Modal === 'confirmacion'} 
                animationType = "fade" 
                transparent = {true} 
                onRequestClose = {() => setModal('null')}
                ></Modal> 


                <view style = {styles.modalOverlay}></view> 
                <view style = {styles.modalCard}></view> 
                <text style = {styles.modalTitle}> Eliminar elemento </text> 
                <text style = {styles.modalBody}> Esta acción no se puede deshacer 
                    </text> 

                    <view style = {styles.modalActions}> 
                        <buttom title = "Cancelar" onPress = {() => setModal(null)} color = "blue" /> 
                        <buttom title = "Aceptar" onPress = {() => setMensaje('Elemento eliminado')};
                         color = "red" />

         </view> 

},}
i


    )
}
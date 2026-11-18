import react, { useState } from "react";
import { StyleSheet, Text, Pressable } from 'react-native';

export default function TarjetaProducto({ nombre, precio, descripcion}){ 
    const mostrarDetalle = () => {Alert.alert("Detalle del Producto", `Nombre: ${nombre}\nPrecio: ${precio}\nDescripción: ${descripcion}`);};

}               
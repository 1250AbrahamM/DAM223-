import react, { useState } from "react";
import { StyleSheet, Text } from 'react-native';

export function EncabezadoCafeteria() {
    return (
        <View>
            <Text style={styles.encabezado}> Cafetyeria </Text>
            <Text style={styles.encabezado}> Antojos </Text>
        </View>
    );
}
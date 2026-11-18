import react, { useState } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export function ContadorPedido() {
    const [Total, setTotal] = useState(0);
    const [Pedido, setPedido] = useState(0);

    return (
        <View>
            <Text> Antojo Express</Text>
            <View>
                <Button title="Agregar al Pedido(Cafe)" 
                onPress={() =>{ 
                    setPedido(Pedido + "cafe");
                    setTotal(Total + 10);
                }}
                />
            </View>
           <Text> Pedido: {Pedido} </Text>
           <Text> Total: ${Total.toFixed(2)} </Text>
        </View>
    );
}
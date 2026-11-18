
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TarjetaPerfil } from './componentes/TarjetaPerfil';

import TarjetaProducto from './componentes/TarjetaProducto';

import EncabezadoCafeteria from './componentes/EncabezadoCafeteria';
export default function App() {
  return (
    <ScrollView>
      <TarjetaProducto
        nombre="Café"
        precio="$40"
        descripcion="Café recién hecho"
      />
      <TarjetaProducto
        nombre="Pan"
        precio="$20"
        descripcion="Pan recién horneado"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
});

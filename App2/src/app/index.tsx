
import React from 'react';
import { View, StyleSheet } from 'react-native';

import ModalBottomScreen from '../componentes/Modal';

export default function Index() {
  return (
    <View style={styles.container}>
      <ModalBottomScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

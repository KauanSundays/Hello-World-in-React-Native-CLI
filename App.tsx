import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Altere a cor de fundo para algo mais agradável
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Altere a cor do texto para melhor contraste
    textAlign: 'center',
  },
});

export default App;

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  componentDidMount() {
    console.log('Ola')
    debugger
    console.log('rksljfklsdjfkljsdklfjdslk')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Meu incrível aplicativo super merda</Text>
        <Text>Meu incrível aplicativo super merda</Text>
        <Text>Meu incrível aplicativo super merda</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

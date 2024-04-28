/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import Cryptcomp from './src/Cryptcomp';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          Repack integration with rn-nodeify
        </Text>
        <View
          style={{
            marginTop: 20,
            flex: 1,
            backgroundColor: 'green'
          }}>
          <Text style={styles.para}>Testing this package to work fine</Text>
          <Text style={styles.para}>Testing this package to work fine</Text>
          <Text style={styles.para}>Testing this package to work fine</Text>
          <Text style={styles.para}>Testing this package to work fine</Text>
          <Text style={styles.para}>Testing this package to work fine</Text>
        </View>
        <Cryptcomp />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
    flexGrow: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  para: {
    fontSize: 18,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

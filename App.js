/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';
import AnalysisScreen from './src/screens/AnalysisScreen';




const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}> 
      <View style = {styles.Container}>
        
        <AnalysisScreen></AnalysisScreen>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex : 1,
    //paddingHorizontal: 24,
    //alignItems:'center',
    //justifyContent:'center',
    backgroundColor: '#fff',
  },
});

export default App;

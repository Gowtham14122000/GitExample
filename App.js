/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default App;

function App() {
  return(
    <View style={{alignContent:'center',alignItems:'center',flex:1}}>
      <Text>
        Hello
      </Text>
      <Text>
        Everyone
      </Text>
    </View>
  );
}
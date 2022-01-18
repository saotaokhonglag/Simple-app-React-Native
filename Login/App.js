import React from 'react';
import Screen from './src/navigation/index'
import { ThemeProvider } from "react-native-rapi-ui";
import { SafeAreaView, StyleSheet, Text} from 'react-native';

import {useAuth, logout} from './firebase'

import Navigation from './src/navigation/admin';
export default function App() {
  const currentUser = useAuth();

    return (

      <ThemeProvider>
              <Screen />
            </ThemeProvider>
 
        );
  
  
  
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

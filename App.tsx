import { StyleSheet } from 'react-native'
import React from 'react'
import Routes from './src/Routes'
import { NativeBaseProvider, theme } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NativeBaseProvider theme={theme as any} >
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App

const styles = StyleSheet.create({})
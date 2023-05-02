import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import React from 'react'
import Onboarding from '../../screen/public/Onboarding';
import Welcome from '../../screen/Auth/Welcome';



const PublicRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={'Onboarding'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Onboarding' component={Onboarding} />
      <Stack.Screen name='Welcome' component={Welcome} />
    </Stack.Navigator>
  )
}
export default PublicRoutes

const styles = StyleSheet.create({})
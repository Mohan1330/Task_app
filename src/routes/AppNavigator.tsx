import {View, Text, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, LoginScreen} from '../screens';
import HomeNavigator from './HomeNavigator';
import SplashScreen from 'react-native-splash-screen';
import { colors } from '../theme.ts';

const Stack = createStackNavigator();
const AppNavigator = () => {
  useEffect(
    () => {
      SplashScreen.hide();
    },[]
  );
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false,
         headerBackgroundContainerStyle:{
            backgroundColor:colors.primary 
          }}}
        name="Home"
        component={HomeNavigator}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const style = StyleSheet.create({});

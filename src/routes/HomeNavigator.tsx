import {View, Text} from 'react-native';
import React from 'react';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import {HomeScreen} from '../screens';
import {colors} from '../theme.ts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon1 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ApiScreen from '../screens/ApiScreen';
import Materialicons from 'react-native-vector-icons/MaterialIcons'
const Tab = createBottomTabNavigator();
const HomeNavigator = () => {
  return (
    // <Tab.Navigator
    //   initialRouteName="Feed"
    //   inactiveColor={colors.primary}
    //   //  activeColor='#fff'
    //   barStyle={{backgroundColor: colors.primary}}>
    //   <Tab.Screen
    //     options={{
    //       tabBarLabel: 'Home',
    //       tabBarColor: 'red',
    //       tabBarBadge: false,
    //       tabBarIcon: ({color}) => (
    //         <MaterialCommunityIcons
    //           name="home"
    //           color={colors.primary}
    //           style={{backgroundColor: colors.primary}}
    //           size={28}
    //         />
    //       ),
    //     }}
    //     name="HomeScreen"
    //     component={HomeScreen}
    //   />
    //   <Tab.Screen
    //     options={{
    //       tabBarLabel: 'Settings',
    //       tabBarIcon: ({color}) => (
    //         <Icon1 name="user-circle" color={'black'} size={28} />
    //       ),
    //     }}
    //     name="Settings"
    //     component={ProfileScreen}
    //   />
    // </Tab.Navigator>
    // <Tab.Navigator
    //   initialRouteName="Feed"
    //   activeColor="#e91e63"
    //   labelStyle={{ fontSize: 12 }}
    //   style={{ backgroundColor: 'tomato' }}
    // >
    //   <Tab.Screen
    //     name="Feed"
    //     component={HomeScreen}
    //     options={{
    //       tabBarLabel: '',
    //       tabBarIcon: ({ color }) => (  
    //         <MaterialCommunityIcons name="home" color={color} size={26} />
    //       ),
    //     }}
    //   />

    //   <Tab.Screen
    //     name="Profile"
    //     component={ProfileScreen}
    //     options={{
    //       tabBarLabel: 'Profile',
    //       tabBarIcon: ({ color }) => (
    //         <MaterialCommunityIcons name="account" color={color} size={26} />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>



    <Tab.Navigator
      initialRouteName="Feed"
      
      screenOptions={{
      tabBarStyle:{backgroundColor:colors.primary,height:75,justifyContent:'center',alignItems:'center',paddingTop:15,paddingBottom:15},
        tabBarActiveTintColor:'#fff',
        tabBarInactiveTintColor:'#3F2E3E',

      }}
      
    >
      <Tab.Screen
        name="Task"
        component={HomeScreen}
        options={{
          headerShown:true,
          headerTitleAlign:"center",
          headerStyle:{backgroundColor:colors.primary,},
          headerTitleStyle:{color:'#fff',fontFamily:'Poppins-Light'},
          tabBarLabel: '',
          
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          headerTitleAlign:"center",
          headerStyle:{backgroundColor:colors.primary,},
          headerTitleStyle:{color:'#fff',fontFamily:'Poppins-Light'},

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Api"
        component={ApiScreen}
        options={{
          tabBarLabel: '',
          headerTitleAlign:"center",
          headerStyle:{backgroundColor:colors.primary,},
          headerTitleStyle:{color:'#fff',fontFamily:'Poppins-Light'},

          tabBarIcon: ({ color, size }) => (
            <Materialicons name='add-task' color={color} size={33} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;

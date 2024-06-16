import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../theme.ts';
import LoginScreen from './LoginScreen.js';
import HomeScreen from './HomeScreen.js';
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [PasswordVisible, setPasswordVisible] = useState(true)
  const navigation = useNavigation();
  return (
    <View style={styles.topProfile}>
      <Text
        style={{
          fontSize: 20,
          marginLeft: 20,
          color: colors.primary,
          fontFamily: 'Poppins-Light',
        }}>
        Hello there,👋 Update Your Profile
      </Text>
      <View style={styles.middle}>
        <Text style={styles.text}>Enter Your old Password</Text>
        <TextInput
          style={[styles.Input]}
          // onChangeText={''}
          // label="Password"
          placeholder="Password"
          placeholderTextColor={'#D0D4CA'}
          keyboardType="default"
          secureTextEntry={isSecureEntry}
          mode="outlined"
          outlineColor="#fff"
          activeOutlineColor="#fff"
          cursorColor="#00968a"
          right={
            <TextInput.Icon
              icon={isSecureEntry ? 'eye' : 'eye-off'}
              onPress={() => setIsSecureEntry(!isSecureEntry)}
            />
          }
        />
        <Text style={styles.text}>Enter Your New Password</Text>
        <TextInput
          style={[styles.Input]}
          // onChangeText={''}
          // label="Updated Password"
          placeholder="Updated Password"
          placeholderTextColor={'#D0D4CA'}
          keyboardType="default"
          secureTextEntry={PasswordVisible}
          mode="outlined"
          outlineColor="#fff"
          activeOutlineColor="#fff"
          cursorColor="#00968a"
          right={
            <TextInput.Icon
              icon={PasswordVisible ? 'eye' : 'eye-off'}
              onPress={() => setPasswordVisible(!PasswordVisible)}
            />
          }
        />
      </View>
      <View style={styles.Down}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(LoginScreen)}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#fff',
              fontFamily: 'Poppins-Light',
            }}>
            Update
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Task')}>
          <Text style={styles.downtext}>Back To Task</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(LoginScreen)}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#fff',
              fontFamily: 'Poppins-Light',
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  topProfile: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  textProfile: {
    fontSize: 35,
    color: colors.primary,
  },
  text: {
    fontSize: 17,
    // fontWeight:'bold',
    color: colors.primary,
    fontFamily: 'Poppins-Light',
  },
  middle: {
    // flex:1,
    marginTop: 25,
    padding: 8,
    gap: 18,
  },
  button: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: colors.primary,
    padding: 15,
    alignItems: 'center',
  },
  Down: {
    // flex:1,
    gap: 30,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // down:{
  //   flex:1,
  //   marginTop:40,
  //   gap:10,

  // },
  downtext: {
    margin: 12,
    fontSize: 18,
    color: colors.primary,
    // fontWeight:'bold',
    fontFamily: 'Poppins-Light',
  },
  Input: {
    // width: '100%',
    // flexDirection:'row',
    // height:40,
    // padding: 13,
    fontFamily: 'Poppins-Light',
    alignContent: 'space-between',
    fontSize: 14,
    backgroundColor: '#fff',
    borderRadius: 12,
    // alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  },
});

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../theme.ts';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  const loginclick = () => {
    navigation.navigate('Home');
    onChangeText('');
    onChangeNumber('');
  };

  return (
    <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.Top}>
            <ImageBackground
              style={{height: 300, width: 300}}
              source={require('../assets/images/FRONT.png')}
            />
          </View>
          <View style={styles.Bottom}>
            <TextInput
              style={[styles.Input]}
              onChangeText={onChangeText}
              value={text}
              placeholder="Enter the UserName"
              keyboardType="default"
            />
            <TextInput
              style={[styles.Input]}
              value={number}
              onChangeText={onChangeNumber}
              placeholder="Enter the Password"
            />

            <TouchableOpacity style={styles.Button} onPress={loginclick}>
              <Text style={styles.label}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  KeyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Top: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  Bottom: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 15,
  },
  Input: {
    width: '100%',
    // height:40,
    padding: 18,
    fontSize: 17,
    fontFamily: 'Poppins-Light',
    backgroundColor: '#efefef',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: colors.primary,
    marginTop: 30,
    padding: 15,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: '#FFFF',
    // fontWeight: 'bold',
    fontFamily: 'Poppins-Light',
  },
});

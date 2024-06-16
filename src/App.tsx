import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './routes';
import {StatusBar} from 'react-native';
import {colors} from './theme.ts';
import {Provider as PaperProvider} from 'react-native-paper';


function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={colors.primary} />
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
export default App;

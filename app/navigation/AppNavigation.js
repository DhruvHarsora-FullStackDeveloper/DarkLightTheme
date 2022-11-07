import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useColorScheme } from 'react-native';
import { ROUTES } from '../constant';
import { HomeScreen } from '../modules';

const RootStack = createStackNavigator();

const AppContainer = () => {
  const { scheme } = useColorScheme();

  return (
    <>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootStack.Navigator>
          <RootStack.Screen name={ROUTES.Home} component={HomeScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppContainer;

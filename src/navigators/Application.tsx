import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';

import { ApplicationStackParamList } from '@/interfaces/navigation';

import MainNavigator from './Main';

const Stack = createNativeStackNavigator<ApplicationStackParamList>();

const ApplicationNavigator = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            navigationBarColor: 'transparent',
          }}
          initialRouteName={'Main'}
        >
          <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
      </>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;

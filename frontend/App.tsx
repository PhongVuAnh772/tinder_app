import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppSelector} from './app/hook';
import LoginScreen from './src/screens/auth/LoginScreen';
import TabNavigators from './src/screens/Views/TabNavigators';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  const loggedIn = useAppSelector(state => state.login.loggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        {loggedIn ? (
          <Stack.Screen name="TabNavigators" component={TabNavigators} />
        ) : (
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

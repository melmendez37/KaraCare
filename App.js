import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Splash from '/Users/mendez22/TestApp/Splash.js';
import WelcomePage from '/Users/mendez22/TestApp/Welcome.js';
const Stack = createStackNavigator();

const App = () =>{

  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
          <Stack.Screen name = 'Splash' component={Splash}/>
          <Stack.Screen name = 'WelcomePage' component={WelcomePage}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
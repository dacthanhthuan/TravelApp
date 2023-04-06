import React from 'react';
import 'react-native-gesture-handler';
import Home from './src/screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AttractionDetails from './src/screens/AttractionDetails';
import Gallery from './src/screens/Gallery';
import Map from './src/screens/Map';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='AttrationDetails' component={AttractionDetails}/>
        <Stack.Screen name='Gallery' component={Gallery}/>
        <Stack.Screen name='Map' component={Map}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from "./components/Homepage";
import Display from "./components/Display";


const Stack = createNativeStackNavigator();
function App() {
   return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{headerShown:false}} component={Homepage} />
          <Stack.Screen name="display" options={{headerShown:false}} component={Display} />
        </Stack.Navigator>
      </NavigationContainer>
   )
      // Home:{
      //   screen:Home
      // }
      // Searchbar:{
      //   screen:Searchbar
      // }
 
  }

  export default App;
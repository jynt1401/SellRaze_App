import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import Welcome from "./screens/Welcome";
import HomeScreen from "./screens/HomeScreen";
import { NativeWindStyleSheet } from "nativewind";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={gestureHandlerRootHOC(Welcome)}
            options={{
              title: "Welcome",
            }}
          />
          <Stack.Screen name="HomeScreen" component={gestureHandlerRootHOC(HomeScreen)} />
        </Stack.Navigator>
      
    </NavigationContainer>
  );
}

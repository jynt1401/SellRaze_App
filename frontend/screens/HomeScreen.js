import { Button, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./Main";
import Setting from "./Setting";
import Shop from "./Shop";
import Add from "./Add";
import Profile from "./Profile";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        style: {
          position: "absolute",
          elevation: 10,
          
        },
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Ionicons name="home-sharp" size={26} color="black" />
                ) : (
                  <Ionicons name="home-outline" size={26} color="black" />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Ionicons name="wallet" size={26} color="black" />
                ) : (
                  <Ionicons name="wallet-outline" size={26} color="black" />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <AntDesign name="plussquare" size={26} color="black" />
                ) : (
                  <AntDesign name="plussquareo" size={26} color="black" />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Ionicons name="settings" size={26} color="black" />
                ) : (
                  <Ionicons name="settings-outline" size={26} color="black" />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <FontAwesome5 name="user-alt" size={26} color="black" />
                ) : (
                  <FontAwesome5 name="user" size={26} color="black" />
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;

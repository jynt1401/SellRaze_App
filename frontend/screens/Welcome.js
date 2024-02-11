import * as React from "react";
import { Button, View, Text } from "react-native";
import { useEffect } from "react";
const Welcome = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate("HomeScreen");
      navigation.replace("HomeScreen")
    }, 1500);
  });

  return (
  <View className="w-[100%] h-screen mt-7 bg-[#5497e8] flex">
        <Text className="font-bold text-white text-2xl text-center justify-center mt-[40vh]">Welcom to SellRaze</Text>
        <Text className="font-normal text-white text-md mt-2 text-center ">Loading...</Text>
  </View>);
};

export default Welcome;

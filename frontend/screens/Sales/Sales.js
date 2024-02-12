import {
  Button,
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import Card from "../Card";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ActivityBreakdown from "../Activity Breakdown/Activity breakdown";
import { useState } from "react";
import TotalSales from "../TotalSales/Totalsales";

const Sales = () => {

  const [selectTSale,setselectTSale]=useState(false);
  const onPressTotalSales = () => {
    setselectTSale(true);
  };
  const onPressTotalSalesActivity = () => {
    setselectTSale(false);
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View className="w-full  min-h-screen">
        <ScrollView>
          <View className="flex flex-row justify-between bg-[#f8f8f8] rounded-3xl p-1 w-[60%] ml-5">
            <Pressable
              onPress={onPressTotalSales}
              className={`rounded-2xl p-1  mx-1 flex  items-center ${selectTSale? 'bg-[#2e2e2e] rounded-3xl' : ''}`}
            >
              <Text className={` font-medium p-1 text-[10px]  ${selectTSale? 'text-white ' : ''}`}>
                Total Sales
              </Text>
            </Pressable>


            <Pressable
              onPress={onPressTotalSalesActivity}
              className={`rounded-2xl p-1  mx-1 flex  items-center ${!selectTSale? 'bg-[#2e2e2e] rounded-3xl' : ''}`}
            >
              <Text className={` font-medium p-1 text-[10px]  ${!selectTSale? 'text-white ' : ''}`}>
                Activity breakdown
              </Text>
            </Pressable>
          </View>
          {selectTSale?<TotalSales/>:<ActivityBreakdown/>}
        </ScrollView>
      </View>
    </View>
  );
};

export default Sales;

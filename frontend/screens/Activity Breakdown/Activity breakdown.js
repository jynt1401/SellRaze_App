// Activity breakdown
import { useEffect, useState } from "react";
import { Button, Pressable, Text, View } from "react-native";
import Hour from "./Hour";
import Lifetime from "./Lifetime";
import Monthly from "./Monthly";
import Weekly from "./Weekly";
const ActivityBreakdown = () => {
  const [timeline, settimeline] = useState("Weekly");
  const [Componemt, setComponemt] = useState();

  let TimelineComponent = [
    {
      id: "Hour",
      type: <Hour />,
    },
    {
      id: "Weekly",
      type: <Weekly />,
    },
    {
      id: "Monthly",
      type: <Monthly />,
    },
    {
      id: "Lifetime",
      type: <Lifetime />,
    },
  ];

  // useEffect(()=>{

  // },[timeline]);

  return (
    <View style={{}}>
      <Text className="mt-7 ml-7 font-bold text-lg">Activity breakdown </Text>
      <View className="flex flex-row justify-between  rounded-3xl p-1  mx-5 mt-2 w-[80%]  ">
        <Pressable
          id="Hour"
          onPress={() => {
            settimeline("Hour");
          }}
          className={`rounded-2xl p-1  mx-1 flex  items-center px-2 ${
            timeline === "Hour" ? "bg-[#BAEEFE]" : "bg-[#F2F2F2]"
          } `}
        >
          <Text
            className={` font-medium p-1 text-[10px] ${
              timeline === "Hour" ? "text-[#076AFF]" : ""
            } `}
          >
            Hour
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            settimeline("Weekly");
          }}
          className={`rounded-2xl p-1  mx-1 flex  items-center  ${
            timeline === "Weekly" ? "bg-[#BAEEFE]" : "bg-[#F2F2F2]"
          } `}
        >
          <Text
            className={` font-medium p-1 text-[10px] ${
              timeline === "Weekly" ? "text-[#076AFF]" : ""
            } `}
          >
            Weekly
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            settimeline("Monthly");
          }}
          className={`rounded-2xl p-1  mx-1 flex  items-center  ${
            timeline === "Monthly" ? "bg-[#BAEEFE]" : "bg-[#F2F2F2]"
          }`}
        >
          <Text
            className={` font-medium p-1 text-[10px] ${
              timeline === "Monthly" ? "text-[#076AFF]" : ""
            } `}
          >
            Monthly
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            settimeline("Lifetime");
          }}
          className={`rounded-2xl p-1  mx-1 flex  items-center ${
            timeline === "Lifetime" ? "bg-[#BAEEFE]" : "bg-[#F2F2F2]"
          } `}
        >
          <Text
            className={` font-medium p-1 text-[10px] ${
              timeline === "Lifetime" ? "text-[#076AFF]" : ""
            } `}
          >
            Lifetime
          </Text>
        </Pressable>
      </View>
      <View className="w-[80%] mx-auto mt-5">
        {TimelineComponent.map((value, key) => {
          return (
            <View>{value.id === timeline ? <>{value.type}</> : <></>}</View>
          );
        })}
      </View>
    </View>
  );
};

export default ActivityBreakdown;

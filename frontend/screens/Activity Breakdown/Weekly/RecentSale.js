import { Button, Text, View, Image } from "react-native";

const RecentSale = () => {
  const CardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <View className="m-3">
      <Text className="mt-3 font-bold text-2xl">Recently sold</Text>
      {CardArray.map((key, value) => {
        return <View>{SaleCard()}</View>;
      })}
    </View>
  );
};

export default RecentSale;

const SaleCard = () => {
  return (
    <View className="flex flex-row justify-between mt-5">
      <View className="w-[70%] flex flex-row">
        <View className="w-[35px] h-[35px] bg-[#e8e8e8] rounded-full flex justify-center items-center">
          <Image
            className="bg-contain w-[32px] h-[32px]  rounded-full"
            source={require("../../../Images/icon.png")}
          />
        </View>
        <View className="ml-2">
          <Text className="text-[12px] font-semibold">
            Vanleonet Beach Blanket 10'
          </Text>
          <Text className="text-[10px] font-semibold text-[#667385]">
            Feb 14, 2024 5:19pm
          </Text>
        </View>
      </View>
      <View className="w-[20%]">
        <Text className="font-bold text-[10px] text-right">$35.42</Text>
      </View>
    </View>
  );
};

import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar = ({ onPress, placeholder, value, onChangeText }: Props) => {
  return (
    <View className="flex-row items-center bg-slate-900 px-5 py-2 rounded-full">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
        value={value}
        onPress={onPress}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;

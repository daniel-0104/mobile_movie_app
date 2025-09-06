import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const search = () => {
  const {
    data: movies,
    loading,
    error,
  } = useFetch(() =>
    fetchMovies({
      query: "",
    })
  );
  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 20,
          paddingRight: 5,
          marginBottom: 10,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        className="px-5"
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 items-center">
              <Image source={icons.logo} className="w-12 h-10 mb-5 mx-auto" />
            </View>
            <View className="my-5">
              <SearchBar placeholder="Search for a movie" />
            </View>
            {loading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}
            {error && (
              <Text className="text-red-500 px-5 my-3">
                Error: {error.message}
              </Text>
            )}
            {!loading &&
              !error &&
              "Search Term".trim() &&
              movies?.length > 0 && (
                <Text className="text-lg text-white font-bold mb-5">
                  Search Results for : {``}
                  <Text className="text-accent">Search Term</Text>
                </Text>
              )}
          </>
        }
      />
    </View>
  );
};

export default search;

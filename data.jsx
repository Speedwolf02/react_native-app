import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";

const MovieDataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.tamilprint44.art/hit_the_third_case_2025_tamil_movie_download")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // This will fail if it's not JSON
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator style={{ marginTop: 50 }} />;
  }

  if (error) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Error fetching data: {error}</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Name: {item.Movie}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 5,
  },
});

export default MovieDataFetcher;

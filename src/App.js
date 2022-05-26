import React, { useState, useEffect, useMemo } from 'react';

import {
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import axios from 'axios';
import MovieCard from './MovieCard';


export default function App() {

  const [movies, setMoives] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loadMore, setLoadMore] = useState(false);

  //fired each time the pageNumber changes
  useEffect(() => {
    fetchData();
  }, [pageNumber]);

  //used to get data from the api
  const fetchData = () => {
    axios.get(`http://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989e2&page=${pageNumber}`)
      .then(function (response) {
        if (pageNumber == 1) {
          setMoives(response.data.results);
        } else {
          setMoives(movies => [...movies, ...response.data.results]);
          setLoadMore(false);
        }
      })
      .catch(function (error) {
        console.log(error.message);
      })
  }

  /*changes the page number when the end is reached in 
  * the flat list to fire the use effect to the data 
  * of the next page.
  */ 
  const onEndReachedHandler = () => {
    setPageNumber(pageNumber + 1);
    setLoadMore(true);
  }

  //handles the showing of activity indicator while loading the data
  const footerHandler = () => {
    if (loadMore) {
      return (
        <ActivityIndicator size="large" color="#0451cc" />
      )
    } else {
      return (
        null
      )
    }
  }

  return (
    <View style={{ backgroundColor: '#FFFFFF' }}>
      <FlatList
        data={movies}
        initialNumToRender={10}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={onEndReachedHandler}
        onEndReachedThreshold={0.1}
        ListFooterComponent={footerHandler}
        renderItem={renderitem}
      >
      </FlatList>
    </View>
  )
}

const renderitem = ({ item }) => <MovieCard item={item} />;
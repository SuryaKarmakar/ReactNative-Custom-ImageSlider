import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';

import data from './localData';

import ScrollViewImageSlider from './src/ScrollViewImageSlider';
import FlatListImageSlider from './src/FlatListImageSlider';

const App = () => {
  return (
    <View>
      <ScrollViewImageSlider data={data} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;

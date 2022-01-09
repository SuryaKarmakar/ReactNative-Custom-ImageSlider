import React, {useState} from 'react';
import {View, ScrollView, Image, Dimensions} from 'react-native';

import Styles from './styles';

const ScrollViewImageSlider = props => {
  const {data} = props;
  const windowWidth = Dimensions.get('window').width;

  const [activeIndex, setActiveIndex] = useState(0);

  const setNewIndex = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== activeIndex) {
      setActiveIndex(slide);
    }
  };

  return (
    <>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        scrollEnabled={true}
        snapToAlignment="center"
        scrollEventThrottle={15}
        decelerationRate={'fast'}
        snapToInterval={windowWidth}
        onScrollEndDrag={setNewIndex}>
        {data.map(item => {
          return (
            <Image
              source={{
                uri: item?.imgUrl,
              }}
              style={Styles.imageContainer}
            />
          );
        })}
      </ScrollView>
      <View style={Styles.indicatorView}>
        {data.map((item, index) => {
          return (
            <View
              style={
                index === activeIndex
                  ? Styles.activeRoundView
                  : Styles.unActiveRoundView
              }></View>
          );
        })}
      </View>
    </>
  );
};
export default ScrollViewImageSlider;

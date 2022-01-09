import React, {useState} from 'react';
import {View, ScrollView, Image, Dimensions} from 'react-native';

import Styles from './styles';

const ScrollViewImageSlider = props => {
  const {data} = props;
  const windowWidth = Dimensions.get('window').width;

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      scrollEnabled={true}
      snapToAlignment="center"
      scrollEventThrottle={15}
      decelerationRate={'fast'}
      snapToInterval={windowWidth}>
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
  );
};
export default ScrollViewImageSlider;

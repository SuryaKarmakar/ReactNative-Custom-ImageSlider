import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  imageContainer: {
    width: windowWidth,
    height: 250,
  },
});

export default Styles;

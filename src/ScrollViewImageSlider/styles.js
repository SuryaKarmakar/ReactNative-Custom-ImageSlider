import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  imageContainer: {
    width: windowWidth,
    height: 250,
  },
  indicatorView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
  },
  unActiveRoundView: {
    width: 8,
    height: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeRoundView: {
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 4,
    marginHorizontal: 5,
  },
});

export default Styles;

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import tinderLogo from '../../../../assets/main/tinder.png';
const CardViewHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={tinderLogo} style={styles.imageLogo} />
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <FontAwesome name="bell" size={25} color="rgb(123, 133, 144)" />
        </TouchableOpacity>
        <TouchableOpacity >
          <FontAwesome
            name="sliders"
            size={25}
            color="rgb(123, 133, 144)"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardViewHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    backgroundColor: 'white'
  },
  imageLogo: {
    width: '31%',
    height: '100%',
    resizeMode: 'cover',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    paddingLeft: '10%',
  },
});

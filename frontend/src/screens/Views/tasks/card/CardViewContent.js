import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SwiperComponent from './SwiperComponent';

const CardViewContent = () => {
  const [data, setData] = useState([
    {image: require('../../../../assets/main/assets/background2.jpg'), id: 1},
    {image: require('../../../../assets/main/assets/background.jpg'), id: 2},
  ]);
  return (
    <View style={styles.container}>
      {data
        .map((item, index) => {
          return <SwiperComponent item={item} index={index} key={item.id} />;
        })
        .reverse()}
    </View>
  );
};

export default CardViewContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(239, 242, 251)',
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  
});

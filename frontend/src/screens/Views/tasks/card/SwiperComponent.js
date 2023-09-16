import React, {Component, useRef} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Dimensions,
  Animated,
  PanResponder,
} from 'react-native';

import Swiper from 'react-native-swiper';

const {width: widthWindow, height: heightWindow} = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    pointerEvents: 'box-none',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  slide2: {
    flex: 1,
  },
  slide3: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  swiperContainer: {
    flex: 0.9,
  },
  customPagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black',
    position: 'absolute',
    paddingVertical: 5,
    alignSelf: 'center',
  },
  dot: {
    paddingVertical: 3,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'rgb(73, 67, 74)',
  },
  activeDot: {
    backgroundColor: 'rgb(255, 255, 255)',
  },
  cardInfo: {
    width: '100%',
    paddingVertical: '3%',
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textName: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textAge: {
    color: 'white',
    fontSize: 25,
    paddingHorizontal: 10,
  },
  infoImage: {
    flex: 0.948,
  },
  cardContainer: {
    // flex: 1,
    width: '100%',
    height: heightWindow - 200,
  },
});

export default class SwiperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      containerWidth: 0,
    };
    this.pan = new Animated.ValueXY();

     this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: (event, gestureState) => {
        const { moveX, moveY, dx, dy, vx, vy } = gestureState;

        const likeThresholdX = 260;
        const dislikeThresholdX = 170;
        const superLikeThresholdY = 480;

        if (moveX > likeThresholdX && moveY < superLikeThresholdY) {
          console.log('Cực thích');
          // Thực hiện hành động cực thích
        } else if (moveX < dislikeThresholdX) {
          console.log('Hủy');
          // Thực hiện hành động hủy
        } else if (moveX > likeThresholdX) {
          console.log('Thích');
          // Thực hiện hành động thích
        }

        Animated.event([null, { dx: this.pan.x, dy: this.pan.y }], {
          useNativeDriver: false,
        })(event, gestureState);
      },
      onPanResponderRelease: () => {
        Animated.spring(this.pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    });
  }

  goToNextSlide = () => {
    if (this.swiperRef) {
      const nextIndex = this.state.currentIndex + 1;
      this.setState({currentIndex: nextIndex});
      this.swiperRef.scrollBy(1);
    }
  };

  goToPrevSlide = () => {
    if (this.swiperRef) {
      const prevIndex = this.state.currentIndex - 1;
      this.setState({currentIndex: prevIndex});
      this.swiperRef.scrollBy(-1);
    }
  };

  handleContainerLayout = event => {
    this.setState({containerWidth: event.nativeEvent.layout.width});
  };

  handleSwiperPress = event => {
    event.stopPropagation();

    const {containerWidth} = this.state;
    const {locationX} = event.nativeEvent;
    const middleX = containerWidth / 2;

    // Check if the press is on the left or right half of the component
    if (locationX < middleX) {
      this.goToPrevSlide();
    } else {
      this.goToNextSlide();
    }
  };
  handleDotPress = index => {
    this.swiperRef.scrollBy(index - this.state.currentIndex);
    this.setState({currentIndex: index});
  };

  renderCustomPagination = (index, total, context) => {
    const dotWidth = 100 / total;
    const paddingHorizontalWidth = total + 0.5;

    return (
      <View
        style={[
          styles.customPagination,
          {paddingHorizontal: `${paddingHorizontalWidth}%`},
        ]}>
        {Array.from({length: total}).map((_, i) => (
          <TouchableOpacity
            activeOpacity={1}
            key={i}
            style={[
              styles.dot,
              i === index && styles.activeDot,
              {width: `${dotWidth}%`},
            ]}
            onPress={() => console.log(dotWidth)}>
            {/* this.handleDotPress(i) */}
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  render() {
    const {item, index} = this.props;

    return (
      <Animated.View
        ref={view => (this.myView = view)}
        style={{
          transform: [{translateX: this.pan.x}, {translateY: this.pan.y}],
          alignSelf: 'center',
          position: 'absolute',
        }}
        {...this.panResponder.panHandlers}>
        <View style={styles.cardContainer}>
          <View style={styles.cardInfo}>
            <Text style={styles.textName}>Phuong Anh</Text>
            <Text style={styles.textAge}>18</Text>
          </View>

          <TouchableOpacity
            style={styles.container}
            activeOpacity={1}
            onPress={this.handleSwiperPress}
            onLayout={this.handleContainerLayout}>
            <Swiper
              style={styles.wrapper}
              showsPagination
              renderPagination={this.renderCustomPagination}
              scrollEnabled={false}
              ref={swiper => (this.swiperRef = swiper)}>
              <Image style={styles.image} source={item.image} />
              <View style={styles.slide2}>
                <Image style={styles.image} source={item.image} />
              </View>
              <View style={styles.slide3}>
                <Image style={styles.image} source={item.image} />
              </View>
            </Swiper>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent);

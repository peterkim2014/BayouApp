import React, { useRef } from 'react';
import { Animated, PanResponder, Dimensions } from 'react-native';
import { useNavigate } from 'react-router-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function BackSwipeWrapper({ children }) {
  const navigate = useNavigate();
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return gestureState.moveX < 30 && gestureState.dx > 5;
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx > 0) {
          translateX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 30) {
          // Animate out and navigate back
          Animated.timing(translateX, {
            toValue: SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            navigate(-1);
          });
        } else {
          // Cancel and bounce back
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Animated.View
      style={{
        flex: 1,
        transform: [{ translateX }],
      }}
      {...panResponder.panHandlers}
    >
      {children}
    </Animated.View>
  );
}

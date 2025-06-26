// components/BackSwipeWrapper.jsx
import React, { useRef } from 'react';
import { View, PanResponder } from 'react-native';
import { useNavigate } from 'react-router-native';

export default function BackSwipeWrapper({ children }) {
  const navigate = useNavigate();

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return gestureState.moveX < 30 && gestureState.dx > 10;
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 30) {
          navigate(-1);
        }
      },
    })
  ).current;

  return (
    <View style={{ flex: 1 }} {...panResponder.panHandlers}>
      {children}
    </View>
  );
}

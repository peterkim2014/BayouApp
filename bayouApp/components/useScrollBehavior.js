// hooks/useScrollBehavior.js
import { useRef, useState } from 'react';
import { Animated } from 'react-native';

export default function useScrollBehavior(snapHeight = 300, snapThreshold = 120) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef(null);
  const innerScrollRef = useRef(null);

  const [phase, setPhase] = useState('outer');
  const [outerScrollEnabled, setOuterScrollEnabled] = useState(true);
  const isSnappingRef = useRef(false);

  const triggerSnap = (toInner) => {
    if (isSnappingRef.current) return;
    isSnappingRef.current = true;

    const toValue = toInner ? snapHeight : 0;
    setOuterScrollEnabled(false);

    Animated.timing(scrollY, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      scrollRef.current?.scrollTo({ y: toValue, animated: false });
      setPhase(toInner ? 'inner' : 'outer');
      setOuterScrollEnabled(!toInner);
      isSnappingRef.current = false;
    });
  };

  const handleOuterScroll = (e) => {
    if (!outerScrollEnabled || phase === 'inner') return;

    const offsetY = e.nativeEvent.contentOffset.y;
    const clampedY = Math.max(0, Math.min(snapHeight, offsetY));
    scrollY.setValue(clampedY);

    if (offsetY > snapThreshold && phase === 'outer') {
      triggerSnap(true);
    }

  };

  const handleScrollEnd = (e) => {
    if (isSnappingRef.current) return;
    const offsetY = e.nativeEvent.contentOffset.y;

    if (phase === 'outer' && offsetY > snapThreshold) {
      triggerSnap(true);
    } else if (phase === 'inner' && offsetY <= 0) {
      triggerSnap(false);
    }
  };

  const handleInnerScroll = (e) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    if (offsetY <= 0 && phase === 'inner') {
      triggerSnap(false);
    }
  };

  return {
    scrollY,
    scrollRef,
    innerScrollRef,
    phase,
    outerScrollEnabled,
    handleOuterScroll,
    handleScrollEnd,
    handleInnerScroll,
    outerScrollEnabled,
  };
}

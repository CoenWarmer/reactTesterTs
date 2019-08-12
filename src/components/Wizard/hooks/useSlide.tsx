import { useRef, useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';

const useSlide = (slideTo: number) => {
  const translateX = useRef(new Animated.Value(1)).current;
  const [width, setCardWidth] = useState(0);

  useEffect(() => {
    const slide = () => {
      const toValue =
        slideTo === 1 ? 0 : (slideTo - 1) * width * -1 - (slideTo - 1) * 25;

      Animated.timing(translateX, {
        toValue,
        easing: Easing.elastic(1),
        useNativeDriver: true,
      }).start();
    };
    slide();
    return () => {};
  }, [translateX, slideTo, width]);

  return { translateX, width, setCardWidth };
};

export default useSlide;

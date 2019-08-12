# React Native Tester - Typescript

This is a React Native app that allows the user to enter a string of numbers and a zero, and it will return the number in sequence that the user has entered as a zero.

## Technologies

- React Native 0.60, using hooks
- React Native Vector Icons
- Styled Components 4
- TypeScript 3.6
- Jest

## Getting started

This app is built with `react-native-cli`, not Expo.

1. Install React Native CLI by following instructions here: https://facebook.github.io/react-native/docs/getting-started
2. Install dependencies (`yarn`)
3. Start Metro bundler (`yarn start`)
4. Run `react-native run-ios` or `react-native run-android`.

## Hooks

This project uses two custom hooks: `useBoxGuesser` which provides all state management and validation, and `useSlide` which is a hook for React Native's Animated. Those are located in `src/hooks/Wizard/hooks/`.

`useBoxGuesser` makes use of `useReducer` to handle state management. Components can dispatch actions by using the supplied dispatch function.

## Validation

Validation for both step 1 and 2 are done through the `useBoxGuesser` hook, which employs two validation functions.

## Tests

Tests are supplied for the validation functions.

Want to get in touch? You can: coen.warmer@gmail.com.
